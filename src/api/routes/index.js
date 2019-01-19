import express from 'express'
import { ApolloServer } from 'apollo-server-micro'
import { typeDefs, resolvers } from '../schema'
import session from '../utils/session'

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  tracing: true,
  context: async ({ req }) => {
    return {
      user: (req.session && req.session.user) || null
    }
  },
  playground: {
    settings: {
      'request.credentials': 'include'
    }
  }
})

const graphqlPath = '/api'
const graphqlHandler = apolloServer.createHandler({ path: graphqlPath })

const app = express()
app.use(session)
app.use(graphqlHandler)

export default app
