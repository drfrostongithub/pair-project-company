class Controller {
    static homeLander (req,res){
        res.render(`home and login`,{title : `Home Landing`})
    }
}

module.exports = Controller