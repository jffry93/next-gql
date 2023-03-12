import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class ImageAttribute {
	@Field(() => String, { nullable: true })
	backdrop_path!: string | null;

	@Field(() => String, { nullable: true })
	poster_path!: string | null;
}

@ObjectType()
export class VoteAttribute {
	@Field(() => Number)
	vote_average!: number;

	@Field(() => Number)
	vote_count!: number;
}

@ObjectType()
export class GenreAttribute {
	@Field(() => ID)
	id!: number;

	@Field(() => String)
	name!: string;
}

@ObjectType()
export class SingleTMDB {
	@Field(() => ID)
	id!: string;

	@Field(() => String)
	title!: string;

	@Field(() => String, { nullable: true })
	overview!: string | null;

	@Field(() => String, { nullable: true })
	backdrop_path!: string | null;

	@Field(() => String, { nullable: true })
	poster_path!: string | null;

	// @Field(() => VoteAttribute)
	// vote_data!: VoteAttribute;

	@Field(() => Number)
	vote_average!: number;

	@Field(() => Number)
	vote_count!: number;

	@Field(() => [GenreAttribute])
	genres!: GenreAttribute[];

	@Field(() => String)
	release_date!: string;

	@Field(() => Number)
	budget!: number;

	@Field(() => Number)
	revenue!: number;

	@Field(() => Number, { nullable: true })
	runtime!: number | null;

	@Field(() => String)
	status!: string;

	@Field(() => String, { nullable: true })
	tagline!: string | null;
}
