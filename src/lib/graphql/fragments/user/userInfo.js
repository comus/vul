import gql from 'graphql-tag'

export default gql`
  fragment userInfo on User {
    id
    createdAt
    name
    username
    email
    profilePhoto
  }
`
