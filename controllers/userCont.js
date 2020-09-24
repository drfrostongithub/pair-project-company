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
        // console.log(req.body)
        .then(data=>{
            
            if(!data){
                throw "username or password wrong"
            }else{
                req.session.isLogin = true
                req.session.username = data.username
                if (data.isAdmin == true){
                    req.session.isAdmin = true
                }
                if (data.isCeo == true){
                    req.session.isCeo = true
                }
                res.redirect(`/profiles`)
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