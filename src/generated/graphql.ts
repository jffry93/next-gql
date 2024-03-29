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
};

export type AllCommentsAttribute = {
  __typename?: 'AllCommentsAttribute';
  User?: Maybe<UserAttribute>;
  comment: Scalars['ID'];
};

export type Comment = {
  __typename?: 'Comment';
  comment: Scalars['String'];
  id: Scalars['String'];
};

export type FilteredOpinionAttribute = {
  __typename?: 'FilteredOpinionAttribute';
  id: Scalars['String'];
  img_path: Scalars['String'];
  title: Scalars['String'];
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
  createComment: Comment;
  toggleValue: ToggleValue;
};


export type MutationCreateCommentArgs = {
  comment: Scalars['String'];
  id: Scalars['String'];
  img_path: Scalars['String'];
  title: Scalars['String'];
};


export type MutationToggleValueArgs = {
  id: Scalars['String'];
  img_path: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
  toggleKey: Scalars['String'];
  toggleValue: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  getPopularMovies: Array<Tmdb>;
  getSingleMovie: SingleTmdb;
  getUserData: UserDetails;
  searchMovies: Array<SearchMovieTmdb>;
};


export type QueryGetSingleMovieArgs = {
  movie_id?: InputMaybe<Scalars['String']>;
};


export type QueryGetUserDataArgs = {
  user_id: Scalars['String'];
};


export type QuerySearchMoviesArgs = {
  input: Scalars['String'];
};

export type SearchMovieTmdb = {
  __typename?: 'SearchMovieTMDB';
  completed: Scalars['Boolean'];
  id: Scalars['ID'];
  img_data: ImageAttribute;
  recommend: Scalars['Boolean'];
  title?: Maybe<Scalars['String']>;
  watchlist: Scalars['Boolean'];
};

export type SingleTmdb = {
  __typename?: 'SingleTMDB';
  allComments: Array<AllCommentsAttribute>;
  backdrop_path?: Maybe<Scalars['String']>;
  budget: Scalars['Float'];
  comment?: Maybe<Scalars['String']>;
  completed: Scalars['Boolean'];
  genres: Array<GenreAttribute>;
  id: Scalars['ID'];
  overview?: Maybe<Scalars['String']>;
  poster_path?: Maybe<Scalars['String']>;
  rating: Scalars['Float'];
  recommend: Scalars['Boolean'];
  release_date: Scalars['String'];
  revenue: Scalars['Float'];
  runtime?: Maybe<Scalars['Float']>;
  status: Scalars['String'];
  tagline?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  vote_average: Scalars['Float'];
  vote_count: Scalars['Float'];
  watchlist: Scalars['Boolean'];
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
  toggleKey: Scalars['String'];
  toggleValue: Scalars['String'];
};

export type UserAttribute = {
  __typename?: 'UserAttribute';
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UserDetails = {
  __typename?: 'UserDetails';
  completed: Array<FilteredOpinionAttribute>;
  name?: Maybe<Scalars['String']>;
  recommend: Array<FilteredOpinionAttribute>;
  user_image?: Maybe<Scalars['String']>;
  watchlist: Array<FilteredOpinionAttribute>;
};

export type VoteAttribute = {
  __typename?: 'VoteAttribute';
  vote_average: Scalars['Float'];
  vote_count: Scalars['Float'];
};

export type GetPopularMoviesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPopularMoviesQuery = { __typename?: 'Query', getPopularMovies: Array<{ __typename?: 'TMDB', id: string, title: string, overview: string, img_data: { __typename?: 'ImageAttribute', backdrop_path: string, poster_path: string }, vote_data: { __typename?: 'VoteAttribute', vote_average: number, vote_count: number } }> };

export type SearchMoviesQueryVariables = Exact<{
  input: Scalars['String'];
}>;


export type SearchMoviesQuery = { __typename?: 'Query', searchMovies: Array<{ __typename?: 'SearchMovieTMDB', id: string, title?: string | null, watchlist: boolean, recommend: boolean, completed: boolean, img_data: { __typename?: 'ImageAttribute', backdrop_path: string, poster_path: string } }> };

export type GetSingleMovieQueryVariables = Exact<{
  movie_id: Scalars['String'];
}>;


export type GetSingleMovieQuery = { __typename?: 'Query', getSingleMovie: { __typename?: 'SingleTMDB', id: string, revenue: number, runtime?: number | null, status: string, tagline?: string | null, title: string, overview?: string | null, backdrop_path?: string | null, poster_path?: string | null, vote_average: number, vote_count: number, release_date: string, budget: number, watchlist: boolean, recommend: boolean, completed: boolean, rating: number, comment?: string | null, genres: Array<{ __typename?: 'GenreAttribute', id: string, name: string }>, allComments: Array<{ __typename?: 'AllCommentsAttribute', comment: string, User?: { __typename?: 'UserAttribute', id: string, name?: string | null, image?: string | null } | null }> } };

export type CreateCommentMutationVariables = Exact<{
  id: Scalars['String'];
  title: Scalars['String'];
  img_path: Scalars['String'];
  comment: Scalars['String'];
}>;


export type CreateCommentMutation = { __typename?: 'Mutation', createComment: { __typename?: 'Comment', id: string, comment: string } };

export type ToggleValueMutationVariables = Exact<{
  title: Scalars['String'];
  toggleKey: Scalars['String'];
  img_path: Scalars['String'];
  id: Scalars['String'];
  toggleValue: Scalars['Boolean'];
}>;


export type ToggleValueMutation = { __typename?: 'Mutation', toggleValue: { __typename?: 'ToggleValue', id: string, toggleKey: string, toggleValue: string } };

export type GetUserDataQueryVariables = Exact<{
  user_id: Scalars['String'];
}>;


export type GetUserDataQuery = { __typename?: 'Query', getUserData: { __typename?: 'UserDetails', name?: string | null, user_image?: string | null, watchlist: Array<{ __typename?: 'FilteredOpinionAttribute', id: string, title: string, img_path: string }>, recommend: Array<{ __typename?: 'FilteredOpinionAttribute', id: string, title: string, img_path: string }>, completed: Array<{ __typename?: 'FilteredOpinionAttribute', id: string, title: string, img_path: string }> } };


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
  }
}
    `;
export const SearchMoviesDocument = gql`
    query searchMovies($input: String!) {
  searchMovies(input: $input) {
    id
    title
    watchlist
    recommend
    completed
    img_data {
      backdrop_path
      poster_path
    }
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
    watchlist
    recommend
    completed
    rating
    comment
    allComments {
      comment
      User {
        id
        name
        image
      }
    }
  }
}
    `;
export const CreateCommentDocument = gql`
    mutation createComment($id: String!, $title: String!, $img_path: String!, $comment: String!) {
  createComment(id: $id, title: $title, img_path: $img_path, comment: $comment) {
    id
    comment
  }
}
    `;
export const ToggleValueDocument = gql`
    mutation toggleValue($title: String!, $toggleKey: String!, $img_path: String!, $id: String!, $toggleValue: Boolean!) {
  toggleValue(
    title: $title
    id: $id
    img_path: $img_path
    toggleValue: $toggleValue
    toggleKey: $toggleKey
  ) {
    id
    toggleKey
    toggleValue
  }
}
    `;
export const GetUserDataDocument = gql`
    query getUserData($user_id: String!) {
  getUserData(user_id: $user_id) {
    name
    user_image
    watchlist {
      id
      title
      img_path
    }
    recommend {
      id
      title
      img_path
    }
    completed {
      id
      title
      img_path
    }
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
    searchMovies(variables: SearchMoviesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SearchMoviesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SearchMoviesQuery>(SearchMoviesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'searchMovies', 'query');
    },
    getSingleMovie(variables: GetSingleMovieQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetSingleMovieQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSingleMovieQuery>(GetSingleMovieDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getSingleMovie', 'query');
    },
    createComment(variables: CreateCommentMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateCommentMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateCommentMutation>(CreateCommentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createComment', 'mutation');
    },
    toggleValue(variables: ToggleValueMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ToggleValueMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ToggleValueMutation>(ToggleValueDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'toggleValue', 'mutation');
    },
    getUserData(variables: GetUserDataQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUserDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserDataQuery>(GetUserDataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUserData', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;