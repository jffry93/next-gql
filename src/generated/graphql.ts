import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Example = {
  __typename?: 'Example';
  age: Scalars['Float'];
  attributes: Array<ExampleAttribute>;
  availableDate: Scalars['DateTime'];
  color: Scalars['String'];
  description: Array<Scalars['String']>;
  name: Scalars['ID'];
  sex: Scalars['String'];
};

export type ExampleAttribute = {
  __typename?: 'ExampleAttribute';
  key: Scalars['ID'];
  value: Scalars['String'];
};

export type Movie = {
  __typename?: 'Movie';
  comment?: Maybe<Scalars['String']>;
  genre: Array<Scalars['String']>;
  id: Scalars['ID'];
  rating: Scalars['Float'];
  recommend: Scalars['String'];
  title: Scalars['String'];
  watched: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost: Post;
};


export type MutationCreatePostArgs = {
  description: Scalars['String'];
  title: Scalars['String'];
};

export type Post = {
  __typename?: 'Post';
  description: Scalars['String'];
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  allPosts: Array<Post>;
  example: Array<Example>;
  movie: Array<Movie>;
  singleExample: Array<Example>;
  singlePost: Array<Post>;
};


export type QuerySingleExampleArgs = {
  name?: InputMaybe<Scalars['String']>;
};


export type QuerySinglePostArgs = {
  id?: InputMaybe<Scalars['String']>;
};

export type GetExamplesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetExamplesQuery = { __typename?: 'Query', example: Array<{ __typename?: 'Example', name: string, description: Array<string>, sex: string, age: number, attributes: Array<{ __typename?: 'ExampleAttribute', key: string, value: string }> }> };

export type SingleExampleQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type SingleExampleQuery = { __typename?: 'Query', singleExample: Array<{ __typename?: 'Example', name: string, sex: string, description: Array<string>, attributes: Array<{ __typename?: 'ExampleAttribute', key: string, value: string }> }> };

export type GetMoviesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMoviesQuery = { __typename?: 'Query', movie: Array<{ __typename?: 'Movie', id: string, title: string, genre: Array<string>, recommend: string, watched: string, rating: number, comment?: string | null }> };

export type CreatePostMutationVariables = Exact<{
  title: Scalars['String'];
  description: Scalars['String'];
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost: { __typename?: 'Post', id: string, title: string, description: string } };

export type GetPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPostsQuery = { __typename?: 'Query', allPosts: Array<{ __typename?: 'Post', id: string, title: string, description: string }> };

export type SinglePostQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type SinglePostQuery = { __typename?: 'Query', singlePost: Array<{ __typename?: 'Post', id: string, title: string, description: string }> };


export const GetExamplesDocument = gql`
    query getExamples {
  example {
    name
    description
    sex
    age
    attributes {
      key
      value
    }
  }
}
    `;
export const SingleExampleDocument = gql`
    query singleExample($name: String!) {
  singleExample(name: $name) {
    name
    sex
    description
    attributes {
      key
      value
    }
  }
}
    `;
export const GetMoviesDocument = gql`
    query getMovies {
  movie {
    id
    title
    genre
    recommend
    watched
    rating
    comment
  }
}
    `;
export const CreatePostDocument = gql`
    mutation createPost($title: String!, $description: String!) {
  createPost(title: $title, description: $description) {
    id
    title
    description
  }
}
    `;
export const GetPostsDocument = gql`
    query getPosts {
  allPosts {
    id
    title
    description
  }
}
    `;
export const SinglePostDocument = gql`
    query singlePost($id: String!) {
  singlePost(id: $id) {
    id
    title
    description
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getExamples(variables?: GetExamplesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetExamplesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetExamplesQuery>(GetExamplesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getExamples', 'query');
    },
    singleExample(variables: SingleExampleQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SingleExampleQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SingleExampleQuery>(SingleExampleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'singleExample', 'query');
    },
    getMovies(variables?: GetMoviesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetMoviesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetMoviesQuery>(GetMoviesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getMovies', 'query');
    },
    createPost(variables: CreatePostMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreatePostMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreatePostMutation>(CreatePostDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createPost', 'mutation');
    },
    getPosts(variables?: GetPostsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetPostsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPostsQuery>(GetPostsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getPosts', 'query');
    },
    singlePost(variables: SinglePostQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SinglePostQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SinglePostQuery>(SinglePostDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'singlePost', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;