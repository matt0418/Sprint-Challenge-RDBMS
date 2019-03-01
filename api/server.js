const express = require('express')
const helmet = require('helmet')

const projectRouter = require('../routes/projectRouter')
const actionsRouter = require('../routes/actionsRouter')

const server = express()

server.use(helmet())
server.use(express())

server.use('/api/projects', projectRouter)
// server.use('/api/actions', actionsRouter)

module.exports = server