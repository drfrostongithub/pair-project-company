const { Profile,User } = require ('../models/index.js')
const formNumber = require ('../helper/formatNumber')

class ProfileController {

    static listProfile(req,res){
        Profile.findAll ()
        .then (data => {
            res.render ('profile',{data,formNumber})
        })
        .catch (err => {
            res.send (err)
        })
    }

    static getAddProfile(req,res){
        res.render(`add-profile`)
    }

    static postAddProfile(req,res){
        let dataBody = req.body
        Profile.create (dataBody)
        .then (data => {
            res.redirect ('/profiles')
        })
        .catch (err => {
            res.send (err)
        })
        
    }

    static getEditProfile(req,res){
        Profile.findByPk (+req.params.id)
        .then (data => {
            res.render(`edit-profile`,{data})
        })
        .catch (err => {
            res.send (err)
        })
    }

    static postEditProfile(req,res){
        let dataBody = req.body
        Profile.update (dataBody,{
            where : {
                id: +req.params.id
            }
        })
        .then (data => {
            res.redirect ('/profiles')
        })
        .catch (err => {
            res.send (err)
        })
    }

    static myProfile(req,res){
        User.findByPk (+req.params.id,{
            include: Profile
        })
        .then (data => {
            res.render ('myprofile',{data})
        })
        .catch (err => {
            res.send (err)
        })
    }
}

module.exports = ProfileController