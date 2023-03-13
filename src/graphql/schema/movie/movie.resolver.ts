//this where you would get data from db. Example below
import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { prisma } from '../../../../prisma/db';
import { Comment, Movie, ToggleValue } from './movie';

@Resolver(Movie)
export class MovieResolver {
	// Toggle Boolean values in Movie Table
	@Mutation(() => ToggleValue)
	async toggleValue(
		@Arg('title') title: string,
		@Arg('id') id: string,
		@Arg('value') value: boolean
	): Promise<{
		title: string;
		value: boolean;
		id: string;
	}> {
		// will create or update record in table
		await prisma.movie.upsert({
			create: {
				// ... data to create a Movie
				id,
				[title]: !value,
			},
			update: {
				// ... in case it already exists, update
				[title]: !value,
			},
			where: {
				id,
				// ... the filter for the Movie we want to update
			},
		});
		const newPost = {
			id,
			title,
			value: !value,
		};

		return newPost;
	}
	// add comment
	@Mutation(() => Comment)
	async createComment(
		@Arg('id') id: string,
		@Arg('comment') comment: string
	): Promise<Comment> {
		// will create or update record in table
		await prisma.movie.upsert({
			create: {
				// ... data to create a Movie
				id,
				comment: comment,
			},
			update: {
				// ... in case it already exists, update
				comment: comment,
			},
			where: {
				id,
				// ... the filter for the Movie we want to update
			},
		});
		// takes inputs from formData
		const userComment: Comment = {
			id,
			comment,
		};
		//  posts.push(newPost);
		return userComment;
	}
}
