class UserController {
    static getLogin(req, res) {
        res.send(`home and login`)
        // res.render(`home`, { title: `Halaman Utama` })
    }


    static postLogin(req,res){
        res.send(`postLogin`)

    }

    static logout(req,res){
        res.send(`DestroySession`)
    }
    
}

module.exports = UserController