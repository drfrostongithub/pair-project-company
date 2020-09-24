const express = require('express')
const routers = express.Router()

const profileRouter = require('./profile')
const loginRouter = require('./user')


routers.use(`/profiles`, profileRouter)
routers.use('/' , loginRouter)


module.exports = routers