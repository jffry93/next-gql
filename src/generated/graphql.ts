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

export type Dog = {
  __typename?: 'Dog';
  ageInWeeks: Scalars['Float'];
  attributes: Array<DogAttribute>;
  availableDate: Scalars['String'];
  breed: Scalars['String'];
  color: Scalars['String'];
  description: Array<Scalars['String']>;
  fee: Scalars['Float'];
  image: Scalars['String'];
  name: Scalars['ID'];
  sex: Scalars['String'];
  weight: Scalars['Float'];
};

export type DogAttribute = {
  __typename?: 'DogAttribute';
  key: Scalars['ID'];
  value: Scalars['String'];
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

export type Query = {
  __typename?: 'Query';
  dog?: Maybe<Dog>;
  dogs: Array<Dog>;
  example: Array<Example>;
  singleExample: Array<Example>;
};


export type QueryDogArgs = {
  name: Scalars['String'];
};


export type QuerySingleExampleArgs = {
  name?: InputMaybe<Scalars['String']>;
};

export type DogByNameQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type DogByNameQuery = { __typename?: 'Query', dog?: { __typename?: 'Dog', name: string, sex: string, description: Array<string>, color: string, attributes: Array<{ __typename?: 'DogAttribute', key: string, value: string }> } | null };

export type GetDogsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDogsQuery = { __typename?: 'Query', dogs: Array<{ __typename?: 'Dog', name: string, breed: string, sex: string, image: string, ageInWeeks: number, weight: number, fee: number }> };

export type GetExamplesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetExamplesQuery = { __typename?: 'Query', example: Array<{ __typename?: 'Example', name: string, description: Array<string>, sex: string, age: number, attributes: Array<{ __typename?: 'ExampleAttribute', key: string, value: string }> }> };

export type SingleExampleQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type SingleExampleQuery = { __typename?: 'Query', singleExample: Array<{ __typename?: 'Example', name: string, sex: string, description: Array<string>, attributes: Array<{ __typename?: 'ExampleAttribute', key: string, value: string }> }> };


export const DogByNameDocument = gql`
    query dogByName($name: String!) {
  dog(name: $name) {
    name
    sex
    description
    color
    attributes {
      key
      value
    }
  }
}
    `;
export const GetDogsDocument = gql`
    query getDogs {
  dogs {
    name
    breed
    sex
    image
    ageInWeeks
    weight
    fee
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

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    dogByName(variables: DogByNameQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DogByNameQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<DogByNameQuery>(DogByNameDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'dogByName', 'query');
    },
    getDogs(variables?: GetDogsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetDogsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetDogsQuery>(GetDogsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getDogs', 'query');
    },
    getExamples(variables?: GetExamplesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetExamplesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetExamplesQuery>(GetExamplesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getExamples', 'query');
    },
    singleExample(variables: SingleExampleQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SingleExampleQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SingleExampleQuery>(SingleExampleDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'singleExample', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;