// Movie info to display in search results
import { ObjectType, Field, ID } from 'type-graphql';
import { ImageAttribute } from './TMDB';

@ObjectType()
export class SearchMovieTMDB {
	@Field(() => ID)
	id!: number;

	@Field(() => String, { nullable: true })
	title!: string | null;

	@Field(() => Boolean)
	watchlist!: boolean;

	@Field(() => Boolean)
	recommend!: boolean;

	@Field(() => Boolean)
	completed!: boolean;

	@Field(() => ImageAttribute)
	img_data!: ImageAttribute;
}
