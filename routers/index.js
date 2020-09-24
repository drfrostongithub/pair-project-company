const express = require('express')
const routers = express.Router()
const authenticate = require (`../middlewares/authenticate`)
const Controller = require(`../controllers/controller`)
const profileRouter = require('./profile')
const loginRouter = require('./user')



routers.get('/' , Controller.homeLander)
routers.use('/users' , loginRouter)
routers.use('/profiles' , profileRouter)

module.exports = routers