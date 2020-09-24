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
            if(req.session.isLogin){
                throw "someone still login !"
            }
            else if(!data){
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
                res.redirect(`/users/view`)
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
    
    static viewUser( req,res){
        User.findAll()
        .then ((data)=>{
            res.render(`users`,{data})
        })
        .catch(err=>{
            res.send(err)
        })
    }
}

module.exports = UserController