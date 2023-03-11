//this where you would get data from db. Example below
import { Resolver, Query, Arg, Args, Mutation } from 'type-graphql';
import { Post } from './post';
import posts from './post.json';

@Resolver(Post)
export class PostResolver {
  //get all items
  @Query(() => [Post])
  allPosts(): Post[] {
    return posts;
  }
  //get single item
  @Query(() => [Post])
  //define the query params
  singlePost(@Arg('id', { nullable: true }) id?: string): Post[] {
    if (id) {
      // filter the examples array by name if a name argument is provided
      return posts.filter((post) => post.id.toLowerCase() === id.toLowerCase());
    } else {
      // return the full examples array if no name argument is provided
      return [];
    }
  }
  // create a new post
  @Mutation(() => Post)
  createPost(
    @Arg('title') title: string,
    @Arg('description') description: string
  ): Post {
    // takes inputs from formData
    const newPost: Post = {
      id: `${posts.length + 1}`,
      title,
      description,
    };
    posts.push(newPost);
    return newPost;
  }
}
