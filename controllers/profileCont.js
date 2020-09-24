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
        UserProfile.findAll ({where : {id : +req.params.id},
            include: [Profile, User]}
        )
        .then (data => {
            // res.send(data)
            res.render ('myprofile',{data, formNumber})
        })
        .catch (err => {
            res.send (err)
        })
    }

    static getAssign(req,res){
        let dataProfile 
        Profile.findByPk(+req.params.id)
        .then ((data)=>{
            dataProfile = data
            return User.findAll() 
        })
        .then((dataUser)=>{
            res.render(`assign`, {dataProfile, dataUser})
        })
        .catch (err => {
            res.send (err)
        })
        
    }

    static postAsign(req,res){
        let obj = {
            UserId : req.body.UserId,
            ProfileId : req.params.id,
            status : req.body.status
        }
        UserProfile.create(obj)
        .then ((data)=>{
            
            res.redirect(`/profiles`)
        })
        .catch (err => {
            res.send (err)
        })
    }
}

module.exports = ProfileController