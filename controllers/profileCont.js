const { Profile,User,UserProfile } = require ('../models/index.js')
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
        console.log(req.body)
        let dataBody = {
            fullName : req.body.fullName,
            position : req.body.position,
            salary : req.body.salary,
            startJoin : req.body.startJoin,
            project : req.body.project,
            klien : req.body.klien,
            estimasiProject : req.body.estimasiProject
        }
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
        let dataBody = {
            fullName : req.body.fullName,
            position : req.boy.position,
            salary : req.body.salary,
            startJoin : req.body.startJoin,
            project : req.body.project,
            klien : req.body.klien,
            estimasiProject : req.body.estimasiProject
        }
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
        UserProfile.findByPk (+req.params.id,{
            include: [Profile, User]
        })
        .then (data => {
            res.render ('myprofile',{data})
        })
        .catch (err => {
            res.send (err)
        })
    }

    static getAssign(req,res){
        res.render(`assign`)
    }

    static postAsign(req,res){

    }
}

module.exports = ProfileController