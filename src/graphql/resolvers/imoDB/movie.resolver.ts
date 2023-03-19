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
		@Arg('id') id: string,
		@Arg('title', { nullable: true }) title: string,
		@Arg('img_path') img_path: string,
		@Arg('toggleKey') toggleKey: string,
		@Arg('toggleValue') toggleValue: boolean,
		@Ctx() { req }: ContextType
	): Promise<ToggleValue> {
		const session = await getSession({ req });
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
					[toggleKey]: !toggleValue,
				},
			});
		} else {
			await prisma.movie.create({
				data: {
					// ... data to create a Movie
					id: Number(id),
					title,
					img_path,
					[toggleKey]: !toggleValue,
					userEmail: session?.user?.email,
				},
			});
		}
		const newPost = {
			id,
			toggleKey,
			toggleValue: !toggleValue,
		};

		return newPost;
	}
	// add comment
	@Mutation(() => Comment)
	async createComment(
		@Arg('id') id: string,
		@Arg('title') title: string,
		@Arg('img_path') img_path: string,
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
		// will create or update record in table
		await prisma.movie.upsert({
			create: {
				// ... data to create a Movie
				id: Number(id),
				title,
				img_path,
				comment: comment,
				userEmail: session?.user?.email,
			},
			update: {
				// ... in case it already exists, update
				comment: comment,
			},
			where: {
				imoID: searchDB?.imoID || '',
				// ... the filter for the Movie we want to update
			},
		});

		// takes inputs from formData
		const userComment: Comment = {
			id,
			comment,
		};
		return userComment;
	}
}
