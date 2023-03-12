import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class Movie {
	@Field(() => ID)
	id!: string;

	@Field(() => String)
	title!: string;

	@Field(() => String)
	tmdb_id!: string;

	@Field(() => String)
	recommend!: boolean;

	@Field(() => String)
	watched!: boolean;

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
	title!: string;

	@Field(() => String)
	value!: boolean;
}
