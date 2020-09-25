const express = require('express')
const routers = express.Router()
const authenticate = require (`../middlewares/authenticate`)
const ProfileController = require('../controllers/profileCont.js')
const multer = require(`multer`)
const upload = multer({dest: `uploads/`})


routers.use(authenticate)
routers.get('/' , ProfileController.listProfile)
routers.get('/add' , ProfileController.getAddProfile)
routers.post('/add' , ProfileController.postAddProfile)
routers.post('/add', upload.single('avatar'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    next()
  })
routers.get('/:id/edit' , ProfileController.getEditProfile)
routers.post('/:id/edit' , ProfileController.postEditProfile)
routers.get('/:id/myprofile' , ProfileController.myProfile)
routers.get('/:id/assign' , ProfileController.getAssign)
routers.post('/:id/assign' , ProfileController.postAsign)

module.exports = routers