const express = require('express')
const middlewares = require('./dist/server/middlewares').default

module.exports = {
  launcher ({ port, handle }) {
    const app = express()
    app.set('trust proxy', true)
    app.use(middlewares)
    app.use(handle)
    app.listen(port)
  }
}
