import { Router } from 'express'
import firebase from './firebase'

const middlewares = Router()

middlewares.use(firebase)

export default middlewares
