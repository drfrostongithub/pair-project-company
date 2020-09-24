const express = require('express')
const routers = express.Router()

const Controller = require(`./`)
const productionHouseRouter = require('./productionHouseRouter.js')
const movieRouter = require('./movieRouter.js')
const castRouter = require('./castRouter.js')

routers.use('/', Controller)
routers.use('/productionhouse' , productionHouseRouter)
routers.use('/movie' , movieRouter)
routers.use('/cast' , castRouter)

module.exports = routers