// This is the schema used to get the Movie Details
import { ObjectType, Field, ID } from 'type-graphql';

//Comment schema for IMO data
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

	@Field(() => UserAttribute, { nullable: true })
	User!: UserAttribute | null;
}

// Movie details schema for TMDB data
@ObjectType()
class GenreAttribute {
	@Field(() => ID)
	id!: number;

	@Field(() => String)
	name!: string;
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

// Response from TMBD for individual movie
export interface SingleTMDBRes {
	backdrop_path: string | null;
	budget: number;
	genres: [
		{
			id: number;
			name: string;
		}
	];
	id: number;
	overview: string | null;
	poster_path: string | null;
	release_date: string;
	revenue: number;
	runtime: number | null;
	status: string;
	tagline: string | null;
	title: string;
	vote_average: number;
	vote_count: number;
}
// types with comments from prisma database
export interface SingleMovieWithComments extends SingleTMDBRes {
	allComments: {
		comment: string | null;
		User: {
			name: string | null;
			image: string | null;
		} | null;
	}[];
}
