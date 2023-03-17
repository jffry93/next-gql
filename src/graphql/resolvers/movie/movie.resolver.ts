//this where you would get data from db. Example below
import { getSession } from 'next-auth/react';
import { Resolver, Query, Mutation, Arg, Ctx } from 'type-graphql';
import { prisma } from '../../../../prisma/db';
import { Comment, Movie, ToggleValue } from './movie';
import type { ContextType } from '@/pages/api/graphql';

@Resolver(Movie)
export class MovieResolver {
	// Toggle Boolean values in Movie Table
	@Mutation(() => ToggleValue)
	async toggleValue(
		@Arg('title') title: string,
		@Arg('id') id: string,
		@Arg('value') value: boolean,
		@Ctx() { req }: ContextType
	): Promise<{
		title: string;
		value: boolean;
		id: number;
	}> {
		const session = await getSession({ req });
		console.log(session);
		// will create or update record in table
		const searchDB = await prisma.movie.findFirst({
			where: {
				id: Number(id),
				userEmail: session?.user?.email,
			},
		});

		if (searchDB !== null) {
			await prisma.movie.update({
				where: {
					// ... provide filter here

					imoID: searchDB?.imoID,
				},
				data: {
					// ... provide data here
					[title]: !value,
				},
			});
		} else {
			await prisma.movie.create({
				data: {
					// ... data to create a Movie
					id: Number(id),
					[title]: !value,
					userEmail: session?.user?.email,
				},
			});
		}
		const newPost = {
			id: Number(id),
			title,
			value: !value,
		};

		return newPost;
	}
	// add comment
	@Mutation(() => Comment)
	async createComment(
		@Arg('id') id: string,
		@Arg('comment') comment: string,
		@Ctx() { req }: ContextType
	): Promise<Comment> {
		const session = await getSession({ req });
		const searchDB = await prisma.movie.findFirst({
			where: {
				id: Number(id),
				userEmail: session?.user?.email,
			},
		});
		// console.log(searchDB);
		// will create or update record in table
		const upsert = await prisma.movie.upsert({
			create: {
				// ... data to create a Movie
				id: Number(id),
				comment: comment,
				userEmail: session?.user?.email,
			},
			update: {
				// ... in case it already exists, update
				comment: comment,
			},
			where: {
				imoID: searchDB?.imoID,
				// ... the filter for the Movie we want to update
			},
		});
		console.log(upsert);
		// takes inputs from formData
		const userComment: Comment = {
			id,
			comment,
		};
		return userComment;
	}
}
