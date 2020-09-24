const { User } = require(`../models/index`)
const bcryptjs = require(`bcryptjs`)

class UserController {
    static getLogin(req, res) {
        res.render(`formLogin`)
    }


    static postLogin(req, res) {
        User.findOne({
            where: {
                username: req.body.username,
            }
        })
            // console.log(req.body)
            .then(data => {
                if (req.session.isLogin) {
                    throw "someone still login !"
                }
                if (!data) {
                    throw "username or password wrong"
                }
                if (bcryptjs.compareSync(req.body.password, data.password)) {
                    req.session.isLogin = true
                    req.session.username = data.username
                    res.redirect(`/`)
                } else {
                    req.session.isLogin = true
                    req.session.username = data.username
                    if (data.isAdmin == true) {
                        req.session.isAdmin = true
                    }
                    if (data.isCeo == true) {
                        req.session.isCeo = true
                    }
                    res.redirect(`/users/view`)
                }
           

            })
            .catch(err => {
                res.send(err)
            })
    }

    static logout(req, res) {
        req.session.destroy(err => {
            if (err) {
                res.send(err)
            }

            res.redirect('/')
        })
    }

    static viewUser(req, res) {
        User.findAll()
            .then((data) => {
                res.render(`users`, { data })
            })
            .catch(err => {
                res.send(err)
            })
    }

    static getAddUser(req, res) {
        res.render(`addUser`)
    }

    static postAddUser(req, res) {

        let obj = {
            username: req.body.username,
            password: req.body.password,
        }

        User.create(obj)
            .then((data) => {
                res.redirect(`/users`)
            })
            .catch((err) => {
                res.send(err)
            })
    }
}

module.exports = UserController