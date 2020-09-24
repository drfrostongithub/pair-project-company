function authenticate (req,res, next){
    if (req.session.isLogin){
        next()
    }else {
        res.send(`Login first !`)
    }
}

module.exports = authenticate