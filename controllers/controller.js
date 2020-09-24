class Controller {
    static Home(req, res) {
        res.render(`home`, { title: `Halaman Utama` })
    }
}

module.exports = Controller