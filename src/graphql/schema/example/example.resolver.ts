//this where you would get data from db. Example below
import { Resolver, Query, Arg, Args, Mutation } from 'type-graphql';

import { Example } from './example';
import examples from './example.json';

@Resolver(Example)
export class ExampleResolver {
  //get all items
  @Query(() => [Example])
  example(): Example[] {
    return examples;
  }
  //get single item
  @Query(() => [Example])
  singleExample(@Arg('name', { nullable: true }) name?: string): Example[] {
    if (name) {
      // filter the examples array by name if a name argument is provided
      return examples.filter(
        (example) => example.name.toLowerCase() === name.toLowerCase()
      );
    } else {
      // return the full examples array if no name argument is provided
      return examples;
    }
  }
}

// Example of resolver connecting to the database

// export class DogsResolver {
// 	@Query(() => [Dog])
// 	async dogs(): Promise<Dog[]> {
// 		// const response = await prisma...

// 		return dogs;
// 	}
// }
