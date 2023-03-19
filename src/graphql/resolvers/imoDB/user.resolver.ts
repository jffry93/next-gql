//this where you would get data from db. Example below
import { getSession } from 'next-auth/react';
import { Resolver, Query, Mutation, Arg, Ctx } from 'type-graphql';
import { prisma } from '../../../../prisma/db';
import { Comment, Movie, ToggleValue } from './movie';
import type { ContextType } from '@/pages/api/graphql';
import { User } from './user';

@Resolver(User)
export class UserResolver {
	// @Query(() => User)
	// async getSingleMovie(
	// 	@Ctx() { req }: ContextType,
	// 	@Arg('user_id', { nullable: true }) user_id?: string
	// ): Promise<SingleMovieWithComments> {
	// 	const session = await getSession({ req });
	// 	// get movie user searched from TMDB
	// 	const apiKey = process.env.MOVIE_DB_KEY;
	// 	const data = await fetch(
	// 		`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}&language=en-US`
	// 	);
	// 	const movie: SingleTMDBRes = await data.json();
	// 	// GET opinion of movies from Prisma
	// 	const imo = await prisma.movie.findMany({
	// 		where: { userEmail: session?.user?.email },
	// 	});
	// 	// Add images url to Object
	// 	movie.id = movie.id;
	// 	movie.backdrop_path = TMDB_IMAGE_PATH + movie.backdrop_path;
	// 	movie.poster_path = TMDB_IMAGE_PATH + movie.poster_path;
	// 	// merge object with array and return types
	// 	const movieWithIMO = mergeObjectWithArray(movie, imo, 'id', defaultObj);
	// 	// GET all comments to to share
	// 	const allComments = await prisma.movie.findMany({
	// 		where: { id: movie.id, comment: { not: null } },
	// 		select: {
	// 			comment: true,
	// 			// userEmail: true,
	// 			User: {
	// 				select: {
	// 					id: true,
	// 					name: true,
	// 					image: true,
	// 				},
	// 			},
	// 		},
	// 	});
	// 	console.log(allComments);
	// 	return { ...movieWithIMO, allComments };
	// }
}
