//this where you would get data from db. Example below
import { Resolver, Query, Arg } from 'type-graphql';
import { prisma } from '../../../../prisma/db';
import { UserDetails } from './user';
import { filterOpinions } from '@/utils/filterOpinions';

@Resolver(UserDetails)
export class UserResolver {
	@Query(() => UserDetails)
	async getUserData(@Arg('user_id') user_id: string): Promise<UserDetails> {
		// GET opinion of movies from Prisma
		const userData = await prisma.user.findFirst({
			where: { id: user_id },
		});
		const allOpinions = await prisma.movie.findMany({
			where: {
				User: { id: user_id },
			},
		});
		const watchlistIMO = filterOpinions('watchlist', allOpinions);
		const recommendIMO = filterOpinions('recommend', allOpinions);
		const completedIMO = filterOpinions('completed', allOpinions);

		return {
			name: userData?.name,
			user_image: userData?.image,
			recommend: recommendIMO,
			watchlist: watchlistIMO,
			completed: completedIMO,
		};
	}
}
