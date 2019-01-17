import express from 'express'
import session from '../utils/session'

const app = express()

app.set('trust proxy', true)

app.use(session)

app.get('/api/logout', (req, res) => {
  res.end('/api/logout')
})

app.post('/api/logout', (req, res) => {
  req.session = null
  res.end(JSON.stringify({ status: 'success' }))
})

export default app
