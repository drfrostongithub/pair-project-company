const express = require('express')
const routers = express.Router()
const UserController = require(`../controllers/userCont`)
const authenticate = require(`../middlewares/authenticate`)

routers.get('/' , UserController.getLogin)
routers.post('/' , UserController.postLogin)
routers.get('/add' , UserController.getAddUser)
routers.post('/add' , UserController.postAddUser)
routers.get(`/view`,authenticate,UserController.viewUser)



module.exports = routers