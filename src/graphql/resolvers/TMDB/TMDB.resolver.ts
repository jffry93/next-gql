import type { ContextType } from '@/pages/api/graphql';
import { mergeObjectWithArray } from '@/utils/mergeObjectWithArray';
import { mergeTwoArrays } from '@/utils/mergeTwoArrays';
import { getSession } from 'next-auth/react';
import { Resolver, Query, Arg, Ctx } from 'type-graphql';
import { prisma } from '../../../../prisma/db';
import { Movie } from '../movie/movie';
import { SearchMovieTMDB } from './searchMovieTMDB';
import { SingleTMDB } from './SingleTMDB';
import { TMDB } from './TMDB';

interface SingleTMDBRes {
	backdrop_path: string | null;
	budget: number;
	genres: [
		{
			id: number;
			name: string;
		}
	];
	id: number;
	overview: string | null;
	poster_path: string | null;
	release_date: string;
	revenue: number;
	runtime: number | null;
	status: string;
	tagline: string | null;
	title: string;
	vote_average: number;
	vote_count: number;
}
interface SingleMovieWithComments extends SingleTMDBRes {
	allComments: {
		comment: string | null;
		User: {
			name: string | null;
			image: string | null;
		} | null;
	}[];
}

const defaultObj = {
	watchlist: false,
	recommend: false,
	completed: false,
	rating: 0,
	comment: null,
};

@Resolver(TMDB)
export class TMDBResolver {
	@Query(() => [TMDB])
	async getPopularMovies(): Promise<Array<TMDB>> {
		// Get movies from TMDB
		const imagePath = 'https://image.tmdb.org/t/p/original/';
		const data = await fetch(
			`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIE_DB_KEY}&language=en-US&page=1`
		);
		const response = await data.json();
		// Update Obj key and value pair to send to frontend
		const updateResponse: TMDB[] = response.results.map((element: any) => {
			const {
				id,
				title,
				overview,
				backdrop_path,
				poster_path,
				vote_average,
				vote_count,
				release_date,
			} = element;

			const tmdbObj = {
				id: id + '',
				title,
				overview,
				img_data: {
					backdrop_path: imagePath + backdrop_path,
					poster_path: imagePath + poster_path,
				},
				vote_data: {
					vote_average,
					vote_count,
				},
				release_date,
			};
			return tmdbObj;
		});

		return updateResponse;
	}
	@Query(() => SingleTMDB)
	async getSingleMovie(
		@Ctx() { req }: ContextType,
		@Arg('movie_id', { nullable: true }) movie_id?: string
	): Promise<SingleMovieWithComments> {
		const session = await getSession({ req });
		// get movie user searched from TMDB
		const apiKey = process.env.MOVIE_DB_KEY;
		const data = await fetch(
			`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}&language=en-US`
		);
		const movie: SingleTMDBRes = await data.json();
		// GET opinion of movies from Prisma
		const imo = await prisma.movie.findMany({
			where: { userEmail: session?.user?.email },
		});

		// Add images url to Object
		const imagePath = 'https://image.tmdb.org/t/p/original';
		movie.id = movie.id;
		movie.backdrop_path = imagePath + movie.backdrop_path;
		movie.poster_path = imagePath + movie.poster_path;

		// merge object with array and return types
		const movieWithIMO = mergeObjectWithArray(movie, imo, 'id', defaultObj);
		console.log('🌎🌎🌎🌎🌎', movieWithIMO);

		// GET all comments to to share
		const allComments = await prisma.movie.findMany({
			where: { id: movie.id, comment: { not: null } },
			select: {
				comment: true,
				// userEmail: true,
				User: {
					select: {
						name: true,
						image: true,
					},
				},
			},
		});
		console.log('🌎🌎🌎🌎🌎', allComments);

		return { ...movieWithIMO, allComments };
	}
	@Query(() => [SearchMovieTMDB])
	async searchMovies(
		@Arg('input') input: string,
		@Ctx() { req }: ContextType
	): Promise<Array<SearchMovieTMDB>> {
		const session = await getSession({ req });
		// get movie titles from TMDB
		const apiKey = process.env.MOVIE_DB_KEY;
		const data = await fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${input}&page=1&include_adult=false`
		);
		const { results } = await data.json();
		// Opinions if no one is signed in
		let imo: Movie[] = [
			{
				id: 1,
				...defaultObj,
			},
		];
		//change value if user is signed in
		if (session) {
			// collect hot take from Prisma 🔥🔥🔥
			imo = await prisma.movie.findMany({
				where: { userEmail: session?.user?.email },
			});
		}
		//Combine the opinions with names
		const superArray = mergeTwoArrays(imo, results, 'id', defaultObj);

		return superArray.map((obj) => {
			return {
				completed: obj.completed,
				id: obj.id,
				recommend: obj.recommend,
				watchlist: obj.watchlist,
				title: obj.title,
			};
		});
	}
}
