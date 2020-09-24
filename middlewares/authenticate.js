function authenticate (req,res, next){
    if (req.session.isLogin){
        next()
    }else {
        res.send(`Login first !. <a href="/users">Click here</a> to login`)
    }
}

module.exports = authenticate