import { ObjectType, Field, ID } from 'type-graphql';
import { ImageAttribute } from '../TMDB/schemas/TMDB';

// schema of movie table in prisma
@ObjectType()
export class Movie {
	@Field(() => ID)
	id!: number;

	@Field(() => String)
	title!: string;

	@Field(() => String)
	img_path!: string;

	@Field(() => Boolean)
	recommend!: boolean;

	@Field(() => Boolean)
	watchlist!: boolean;

	@Field(() => Boolean)
	completed!: boolean;

	@Field(() => Number)
	rating!: number;

	@Field(() => String, { nullable: true })
	comment?: string | null;
}

@ObjectType()
export class ToggleValue {
	@Field(() => ID)
	id!: string;

	@Field(() => String)
	toggleKey!: string;

	@Field(() => String)
	toggleValue!: boolean;
}

@ObjectType()
export class Comment {
	@Field(() => String)
	id!: string;

	@Field(() => String)
	comment!: string;
}
