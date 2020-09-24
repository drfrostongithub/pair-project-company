function logger (req,res,next) {
    console.log(`Receive request from ${req.hostname} - ${req.method} "${req.url} at ${new Date()}`)
    next()
}

module.exports = logger