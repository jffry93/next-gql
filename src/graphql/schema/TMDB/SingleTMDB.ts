import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class ImageAttribute {
	@Field(() => String, { nullable: true })
	backdrop_path!: string | null;

	@Field(() => String, { nullable: true })
	poster_path!: string | null;
}

@ObjectType()
export class GenreAttribute {
	@Field(() => ID)
	id!: number;

	@Field(() => String)
	name!: string;
}

@ObjectType()
export class UserAttribute {
	@Field(() => String, { nullable: true })
	name!: number | null;

	@Field(() => String, { nullable: true })
	image!: string | null;
}

@ObjectType()
export class AllCommentsAttribute {
	@Field(() => ID)
	comment!: number | null;

	@Field(() => [UserAttribute], { nullable: true })
	User!: UserAttribute[] | null;
}

@ObjectType()
export class SingleTMDB {
	@Field(() => ID)
	id!: number;

	@Field(() => String)
	title!: string;

	@Field(() => String, { nullable: true })
	overview!: string | null | undefined;

	@Field(() => String, { nullable: true })
	backdrop_path!: string | null;

	@Field(() => String, { nullable: true })
	poster_path!: string | null;

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

	@Field(() => Boolean)
	watchlist!: boolean;

	@Field(() => Boolean)
	recommend!: boolean;

	@Field(() => Boolean)
	completed!: boolean;

	@Field(() => Number)
	rating!: number;

	@Field(() => String, { nullable: true })
	comment!: string | null;

	@Field(() => [AllCommentsAttribute])
	allComments!: AllCommentsAttribute[];
}
