import merge from 'lodash/merge'
import { gql } from 'apollo-server-micro'

import * as scalars from './types/scalars'
import User from './types/User'

import userQueries from './queries/user'

const Root = gql`
  type Query {
    dummy: String
  }

  type Mutation {
    dummy: String
  }

  type Subscription {
    dummy: String
  }

  schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }
`

export const typeDefs = [
  scalars.typeDefs,
  Root,
  User
]

export const resolvers = merge(
  {},
  // queries
  scalars.resolvers,
  userQueries
)
