import session from 'cookie-session'
import Keygrip from 'keygrip'

const ONE_WEEK = 604800000

const IS_PROD = process.env.NODE_ENV === 'production'

export default session({
  keys: new Keygrip(['secret']),
  name: 'session',
  secure: IS_PROD,
  maxAge: ONE_WEEK,
  signed: true,
  sameSite: 'lax'
})
