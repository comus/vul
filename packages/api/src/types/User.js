import { gql } from 'apollo-server-micro'

const User = gql`
  type User {
    id: ID
    createdAt: Date
    name: String
    username: String
    email: String
    profilePhoto: String
  }

  extend type Query {
    currentUser: User
  }
`

export default User
