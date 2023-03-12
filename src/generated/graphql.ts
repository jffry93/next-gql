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

export type GenreAttribute = {
  __typename?: 'GenreAttribute';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ImageAttribute = {
  __typename?: 'ImageAttribute';
  backdrop_path: Scalars['String'];
  poster_path: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost: Post;
  toggleValue: ToggleValue;
};


export type MutationCreatePostArgs = {
  description: Scalars['String'];
  title: Scalars['String'];
};


export type MutationToggleValueArgs = {
  id: Scalars['String'];
  title: Scalars['String'];
  value: Scalars['Boolean'];
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
  getPopularMovies: Array<Tmdb>;
  getSingleMovie: SingleTmdb;
  singleExample: Array<Example>;
  singlePost: Array<Post>;
};


export type QueryGetSingleMovieArgs = {
  movie_id?: InputMaybe<Scalars['String']>;
};


export type QuerySingleExampleArgs = {
  name?: InputMaybe<Scalars['String']>;
};


export type QuerySinglePostArgs = {
  id?: InputMaybe<Scalars['String']>;
};

export type SingleTmdb = {
  __typename?: 'SingleTMDB';
  backdrop_path?: Maybe<Scalars['String']>;
  budget: Scalars['Float'];
  genres: Array<GenreAttribute>;
  id: Scalars['ID'];
  overview?: Maybe<Scalars['String']>;
  poster_path?: Maybe<Scalars['String']>;
  release_date: Scalars['String'];
  revenue: Scalars['Float'];
  runtime?: Maybe<Scalars['Float']>;
  status: Scalars['String'];
  tagline?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  vote_average: Scalars['Float'];
  vote_count: Scalars['Float'];
};

export type Tmdb = {
  __typename?: 'TMDB';
  id: Scalars['ID'];
  img_data: ImageAttribute;
  overview: Scalars['String'];
  release_date: Scalars['String'];
  title: Scalars['String'];
  vote_data: VoteAttribute;
};

export type ToggleValue = {
  __typename?: 'ToggleValue';
  id: Scalars['ID'];
  title: Scalars['String'];
  value: Scalars['String'];
};

export type VoteAttribute = {
  __typename?: 'VoteAttribute';
  vote_average: Scalars['Float'];
  vote_count: Scalars['Float'];
};

export type GetPopularMoviesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPopularMoviesQuery = { __typename?: 'Query', getPopularMovies: Array<{ __typename?: 'TMDB', id: string, title: string, overview: string, release_date: string, img_data: { __typename?: 'ImageAttribute', backdrop_path: string, poster_path: string }, vote_data: { __typename?: 'VoteAttribute', vote_average: number, vote_count: number } }> };

export type GetSingleMovieQueryVariables = Exact<{
  movie_id: Scalars['String'];
}>;


export type GetSingleMovieQuery = { __typename?: 'Query', getSingleMovie: { __typename?: 'SingleTMDB', id: string, revenue: number, runtime?: number | null, status: string, tagline?: string | null, title: string, overview?: string | null, backdrop_path?: string | null, poster_path?: string | null, vote_average: number, vote_count: number, release_date: string, budget: number, genres: Array<{ __typename?: 'GenreAttribute', id: string, name: string }> } };

export type GetExamplesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetExamplesQuery = { __typename?: 'Query', example: Array<{ __typename?: 'Example', name: string, description: Array<string>, sex: string, age: number, attributes: Array<{ __typename?: 'ExampleAttribute', key: string, value: string }> }> };

export type SingleExampleQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type SingleExampleQuery = { __typename?: 'Query', singleExample: Array<{ __typename?: 'Example', name: string, sex: string, description: Array<string>, attributes: Array<{ __typename?: 'ExampleAttribute', key: string, value: string }> }> };

export type ToggleValueMutationVariables = Exact<{
  title: Scalars['String'];
  id: Scalars['String'];
  value: Scalars['Boolean'];
}>;


export type ToggleValueMutation = { __typename?: 'Mutation', toggleValue: { __typename?: 'ToggleValue', title: string, value: string, id: string } };

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


export const GetPopularMoviesDocument = gql`
    query getPopularMovies {
  getPopularMovies {
    id
    title
    overview
    img_data {
      backdrop_path
      poster_path
    }
    vote_data {
      vote_average
      vote_count
    }
    release_date
  }
}
    `;
export const GetSingleMovieDocument = gql`
    query getSingleMovie($movie_id: String!) {
  getSingleMovie(movie_id: $movie_id) {
    id
    revenue
    runtime
    status
    tagline
    title
    overview
    backdrop_path
    poster_path
    vote_average
    vote_count
    genres {
      id
      name
    }
    release_date
    budget
  }
}
    `;
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
export const ToggleValueDocument = gql`
    mutation toggleValue($title: String!, $id: String!, $value: Boolean!) {
  toggleValue(title: $title, id: $id, value: $value) {
    title
    value
    id
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
    getPopularMovies(variables?: GetPopularMoviesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetPopularMoviesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPopularMoviesQuery>(GetPopularMoviesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getPopularMovies', 'query');
    },
    getSingleMovie(variables: GetSingleMovieQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetSingleMovieQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSingleMovieQuery>(GetSingleMovieDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getSingleMovie', 'query');
    },
    getExamples(variables?: GetExamplesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetExamplesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetExamplesQuery>(GetExamplesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getExamples', 'query');
    },
    singleExample(variables: SingleExampleQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SingleExampleQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SingleExampleQuery>(SingleExampleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'singleExample', 'query');
    },
    toggleValue(variables: ToggleValueMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ToggleValueMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ToggleValueMutation>(ToggleValueDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'toggleValue', 'mutation');
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