import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class Post {
  @Field(() => ID)
  id!: string;

  @Field(() => String)
  title!: string;

  @Field(() => String)
  description!: string;
}
