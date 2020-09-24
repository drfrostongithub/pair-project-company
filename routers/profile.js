const express = require('express')
const routers = express.Router()
const authenticate = require (`../middlewares/authenticate`)
const ProfileController = require('../controllers/profileCont.js')


routers.use(authenticate)
routers.get('/' , ProfileController.listProfile)
routers.get('/add' , ProfileController.getAddProfile)
routers.post('/add' , ProfileController.postAddProfile)
routers.get('/:id/edit' , ProfileController.getEditProfile)
routers.post('/:id/edit' , ProfileController.postEditProfile)
routers.get('/myprofile' , ProfileController.myProfile)


module.exports = routers