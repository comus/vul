import { Router } from 'express'
import login from './routes/login'
import logout from './routes/logout'

const api = Router()

api.use((req, res, next) => {
  if (req.url === '/api/login') {
    login(req, res)
  } else if (req.url === '/api/logout') {
    logout(req, res)
  } else {
    next()
  }
})

export default api
