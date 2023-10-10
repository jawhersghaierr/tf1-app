import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "program" */
export type Program = {
  __typename?: 'program';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  /** An object relationship */
  thumnail?: Maybe<Thumnail>;
};

/** Boolean expression to filter rows from the table "program". All fields are combined with a logical 'AND'. */
export type Program_Bool_Exp = {
  _and?: InputMaybe<Array<Program_Bool_Exp>>;
  _not?: InputMaybe<Program_Bool_Exp>;
  _or?: InputMaybe<Array<Program_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  thumnail?: InputMaybe<Thumnail_Bool_Exp>;
};

/** Ordering options when selecting data from "program". */
export type Program_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  thumnail?: InputMaybe<Thumnail_Order_By>;
};

/** select columns of table "program" */
export enum Program_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** Streaming cursor of the table "program" */
export type Program_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Program_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Program_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "program" */
  program: Array<Program>;
  /** fetch data from the table: "program" using primary key columns */
  program_by_pk?: Maybe<Program>;
  /** fetch data from the table: "thumnail" */
  thumnail: Array<Thumnail>;
  /** fetch data from the table: "thumnail" using primary key columns */
  thumnail_by_pk?: Maybe<Thumnail>;
};


export type Query_RootProgramArgs = {
  distinct_on?: InputMaybe<Array<Program_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Program_Order_By>>;
  where?: InputMaybe<Program_Bool_Exp>;
};


export type Query_RootProgram_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootThumnailArgs = {
  distinct_on?: InputMaybe<Array<Thumnail_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Thumnail_Order_By>>;
  where?: InputMaybe<Thumnail_Bool_Exp>;
};


export type Query_RootThumnail_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "program" */
  program: Array<Program>;
  /** fetch data from the table: "program" using primary key columns */
  program_by_pk?: Maybe<Program>;
  /** fetch data from the table in a streaming manner: "program" */
  program_stream: Array<Program>;
  /** fetch data from the table: "thumnail" */
  thumnail: Array<Thumnail>;
  /** fetch data from the table: "thumnail" using primary key columns */
  thumnail_by_pk?: Maybe<Thumnail>;
  /** fetch data from the table in a streaming manner: "thumnail" */
  thumnail_stream: Array<Thumnail>;
};


export type Subscription_RootProgramArgs = {
  distinct_on?: InputMaybe<Array<Program_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Program_Order_By>>;
  where?: InputMaybe<Program_Bool_Exp>;
};


export type Subscription_RootProgram_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootProgram_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Program_Stream_Cursor_Input>>;
  where?: InputMaybe<Program_Bool_Exp>;
};


export type Subscription_RootThumnailArgs = {
  distinct_on?: InputMaybe<Array<Thumnail_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Thumnail_Order_By>>;
  where?: InputMaybe<Thumnail_Bool_Exp>;
};


export type Subscription_RootThumnail_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootThumnail_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Thumnail_Stream_Cursor_Input>>;
  where?: InputMaybe<Thumnail_Bool_Exp>;
};

/** columns and relationships of "thumnail" */
export type Thumnail = {
  __typename?: 'thumnail';
  alt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  /** An object relationship */
  program: Program;
  program_id: Scalars['Int']['output'];
  url: Scalars['String']['output'];
};

/** Boolean expression to filter rows from the table "thumnail". All fields are combined with a logical 'AND'. */
export type Thumnail_Bool_Exp = {
  _and?: InputMaybe<Array<Thumnail_Bool_Exp>>;
  _not?: InputMaybe<Thumnail_Bool_Exp>;
  _or?: InputMaybe<Array<Thumnail_Bool_Exp>>;
  alt?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  program?: InputMaybe<Program_Bool_Exp>;
  program_id?: InputMaybe<Int_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "thumnail". */
export type Thumnail_Order_By = {
  alt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  program?: InputMaybe<Program_Order_By>;
  program_id?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** select columns of table "thumnail" */
export enum Thumnail_Select_Column {
  /** column name */
  Alt = 'alt',
  /** column name */
  Id = 'id',
  /** column name */
  ProgramId = 'program_id',
  /** column name */
  Url = 'url'
}

/** Streaming cursor of the table "thumnail" */
export type Thumnail_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Thumnail_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Thumnail_Stream_Cursor_Value_Input = {
  alt?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  program_id?: InputMaybe<Scalars['Int']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ThumbnailsListQueryVariables = Exact<{
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
}>;


export type ThumbnailsListQuery = { __typename?: 'query_root', thumnail: Array<{ __typename?: 'thumnail', id: number, url: string, alt: string }> };


export const ThumbnailsListDocument = gql`
    query ThumbnailsList($limit: Int!, $offset: Int!) {
  thumnail(limit: $limit, offset: $offset) {
    id
    url
    alt
  }
}
    `;

/**
 * __useThumbnailsListQuery__
 *
 * To run a query within a React component, call `useThumbnailsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useThumbnailsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useThumbnailsListQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useThumbnailsListQuery(baseOptions: Apollo.QueryHookOptions<ThumbnailsListQuery, ThumbnailsListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ThumbnailsListQuery, ThumbnailsListQueryVariables>(ThumbnailsListDocument, options);
      }
export function useThumbnailsListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ThumbnailsListQuery, ThumbnailsListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ThumbnailsListQuery, ThumbnailsListQueryVariables>(ThumbnailsListDocument, options);
        }
export type ThumbnailsListQueryHookResult = ReturnType<typeof useThumbnailsListQuery>;
export type ThumbnailsListLazyQueryHookResult = ReturnType<typeof useThumbnailsListLazyQuery>;
export type ThumbnailsListQueryResult = Apollo.QueryResult<ThumbnailsListQuery, ThumbnailsListQueryVariables>;