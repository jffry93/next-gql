import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class ImageAttribute {
	@Field(() => String)
	backdrop_path!: string;

	@Field(() => String)
	poster_path!: string;
}

@ObjectType()
export class VoteAttribute {
	@Field(() => Number)
	vote_average!: number;

	@Field(() => Number)
	vote_count!: number;
}

@ObjectType()
export class TMDB {
	@Field(() => ID)
	id!: string;

	@Field(() => String)
	title!: string;

	@Field(() => String)
	overview!: string;

	@Field(() => ImageAttribute)
	img_data!: ImageAttribute;

	@Field(() => VoteAttribute)
	vote_data!: VoteAttribute;

	@Field(() => String)
	release_date!: string;

	@Field(() => Boolean)
	watchlist!: boolean;

	@Field(() => Boolean)
	recommend!: boolean;

	@Field(() => Boolean)
	completed!: boolean;

	@Field(() => Number)
	rating!: number;

	@Field(() => String)
	comment!: string;
}

@ObjectType()
export class IMOAttribute {
	@Field(() => Boolean)
	watchlist!: boolean;

	@Field(() => Boolean)
	recommend!: boolean;

	@Field(() => Boolean)
	completed!: boolean;

	@Field(() => Number)
	rating!: number;

	@Field(() => String)
	comment!: string;
}
