import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class ExampleAttribute {
	@Field(() => ID)
	key!: string;

	@Field(() => String)
	value!: string;
}

@ObjectType()
export class Example {
	@Field(() => ID)
	name!: string;

	@Field(() => [ExampleAttribute])
	attributes!: ExampleAttribute[];

	@Field(() => [String])
	description!: string[];

	@Field(() => String)
	sex!: boolean;

	@Field(() => String)
	color!: string;

	@Field(() => Number)
	age!: number;

	@Field(() => Date)
	availableDate!: string;
}
