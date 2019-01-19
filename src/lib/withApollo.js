import withApollo from 'next-with-apollo'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { API_URL } from './constants'

export default withApollo(({ ctx, headers, initialState }) => (
  new ApolloClient({
    uri: API_URL,
    cache: new InMemoryCache().restore(initialState || {}),
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include'
        },
        headers: {
          ...headers,
          cookie: ctx.req ? ctx.req.headers.cookie || '' : document.cookie
        }
      })
    }
  })
))
