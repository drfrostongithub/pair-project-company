const express = require('express')
const routers = express.Router()
const UserController = require(`../controllers/userCont`)

routers.get('/' , UserController.getLogin)
routers.post('/' , UserController.postLogin)
routers.get(`/view`, UserController.viewUser)
routers.get('/logout' , UserController.logout)


module.exports = routers