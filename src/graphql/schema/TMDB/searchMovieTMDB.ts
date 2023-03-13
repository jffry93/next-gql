import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class SearchMovieTMDB {
  @Field(() => ID)
  id!: string;

  @Field(() => String, { nullable: true })
  title!: string | null;

  @Field(() => Boolean)
  watchlist!: boolean;

  @Field(() => Boolean)
  recommend!: boolean;

  @Field(() => Boolean)
  completed!: boolean;
}
