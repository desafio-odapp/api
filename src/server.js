const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

class App {
  constructor () {
    this.express = express()
    this.isDev = process.env.NODE_ENV !== 'production'

    this.middlewares()
    this.routes()
  }

  middlewares () {
    this.express.use(cors())
    this.express.use(express.json())
    this.express.use(express.urlencoded({ extended: true }))
    this.express.use(morgan('dev'))
  }

  routes () {
    this.express.use('/api', require('./routes'))
  }
}

module.exports = new App().express
