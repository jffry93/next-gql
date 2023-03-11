//this where you would get data from db. Example below
import { Resolver, Query } from 'type-graphql';
import { prisma } from '../../../../prisma/db';
import { Movie } from './movie';

@Resolver(Movie)
export class MovieResolver {
	//get all items
	@Query(() => [Movie])
	async movie(): Promise<Movie[]> {
		const response = await prisma.movie.findMany();
		console.log(response);
		return response;
	}
}

// Example of resolver connecting to the database

// export class DogsResolver {
// 	@Query(() => [Dog])
// 	async dogs(): Promise<Dog[]> {
// 		// const response = await prisma...

// 		return dogs;
// 	}
// }
