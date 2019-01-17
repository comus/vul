import express from 'express'
import * as bodyParser from 'body-parser'
import firebase from 'lib/firebase'
import { getUserByUID, createUser } from '../models/user'
import session from '../utils/session'

const app = express()

app.set('trust proxy', true)

app.use(bodyParser.json())

app.use(session)

app.get('/api/login', (req, res) => {
  res.end('/api/login')
})

app.post('/api/login', async (req, res) => {
  if (!req.body || !req.body.token) {
    res.statusCode = 401
    res.end('UNAUTHORIZED REQUEST!')
    return
  }

  const token = req.body.token.toString()

  try {
    const decodedToken = await firebase.auth().verifyIdToken(token)
    const uid = decodedToken.uid
    let user = await getUserByUID(uid)
    if (!user) {
      user = await createUser({
        input: {
          uid,
          name: decodedToken.name || null,
          profilePhoto: decodedToken.picture || null,
          email: decodedToken.email || null
        }
      })
    }
    req.session.user = user
    res.end(JSON.stringify({ status: 'success' }))
  } catch (__) {
    res.statusCode = 401
    res.end('UNAUTHORIZED REQUEST!')
  }
})

export default app
