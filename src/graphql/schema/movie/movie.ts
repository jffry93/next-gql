import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class Movie {
	@Field(() => ID)
	id!: string;

	@Field(() => String)
	title!: string;

	@Field(() => [String])
	genre!: string[];

	@Field(() => String)
	recommend!: boolean;

	@Field(() => String)
	watched!: boolean;

	@Field(() => Number)
	rating!: number;

	@Field(() => String, { nullable: true })
	comment?: string | null;
}
