const {User} = require (`../models/index`)

class UserController {
    static getLogin(req, res) {
        res.render(`formLogin`)
    }


    static postLogin(req,res){
        User.findOne({
            where:{
                username : req.body.username,
                password : req.body.password
            }
        })
        .then(data=>{
            if(data === null){
                res.redirect('/?err=true')
            }else{
                req.session.isLoggedIn = true
                req.session.username = data.username
                req.session.role = data.isAdmin
                console.log(req.session.role)
            }

            if(req.session.role === false){
                res.redirect(`/profiles/myprofile?user=${req.session.username}&profile=${req.session.profileid}`)
            }else{
                res.redirect('/profiles')
            }
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static logout(req,res){
        req.session.destroy(err=>{
            if(err){
                res.send(err)
            }

            res.redirect('/')
        })
    }
    
}

module.exports = UserController