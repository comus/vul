import GraphQLDate from 'graphql-date'
import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
  scalar Date
`

export const resolvers = {
  Date: GraphQLDate
}
