const express = require('express')
const routers = express.Router()
const UserController = require(`../controllers/userCont`)
const authenticate = require(`../middlewares/authenticate`)

routers.get('/' , UserController.getLogin)
routers.post('/' , UserController.postLogin)
routers.get(`/view`,authenticate,UserController.viewUser)
routers.get('/logout' , UserController.logout)


module.exports = routers