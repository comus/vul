import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import userInfoFragment from '../../fragments/user/userInfo'

export const getCurrentUserQuery = gql`
  query getCurrentUser {
    user: currentUser {
      ...userInfo
    }
  }
  ${userInfoFragment}
`

export const getCurrentUser = graphql(getCurrentUserQuery, {
  options: { fetchPolicy: 'cache-first' }
})
