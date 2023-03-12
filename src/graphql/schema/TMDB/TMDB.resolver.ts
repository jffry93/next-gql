//this where you would get data from db. Example below
import { Resolver, Query, Arg } from 'type-graphql';
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

@Resolver(TMDB)
export class TMDBResolver {
	//get all items
	@Query(() => [TMDB])
	async getPopularMovies(): Promise<TMDB[]> {
		const imagePath = 'https://image.tmdb.org/t/p/original/';
		const data = await fetch(
			`https://api.themoviedb.org/3/movie/popular?api_key=${'d94def994ec173326a17294a58df1a20'}&language=en-US&page=1`
		);
		const response = await data.json();
		const updateResponse = response.results.map((element: any) => {
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
			return {
				id,
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
		});

		return updateResponse;
	}
	@Query(() => SingleTMDB)
	async getSingleMovie(
		@Arg('movie_id', { nullable: true }) movie_id?: string
	): Promise<SingleTMDB> {
		const imagePath = 'https://image.tmdb.org/t/p/original';
		const apiKey = 'd94def994ec173326a17294a58df1a20';
		const data = await fetch(
			`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}&language=en-US`
		);
		const movie: SingleTMDBRes = await data.json();

		const { backdrop_path, poster_path } = movie;
		return {
			id: movie.id + '',
			title: movie.title,
			overview: movie.overview,
			backdrop_path: imagePath + backdrop_path,
			poster_path: imagePath + poster_path,
			vote_average: movie.vote_average,
			vote_count: movie.vote_count,
			genres: movie.genres.map((genre) => ({ id: genre.id, name: genre.name })),
			release_date: movie.release_date,
			budget: movie.budget,
			revenue: movie.revenue,
			runtime: movie.runtime,
			status: movie.status,
			tagline: movie.tagline,
		};
	}
}
