function logger (req,res,next) {
    console.log(`Receive request from ${req.hostname} - ${req.method} "${req.url} at ${new Date()}`)
    next()
}

function authenticate (req,res, next){
    if (req.session.isLogin){
        next()
    }else {
        res.send(`Login first !`)
    }
}

module.exports = logger