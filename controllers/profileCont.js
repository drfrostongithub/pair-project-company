class ProfileController {

    static listProfile(req,res){
        res.send(`listProfile`)
    }

    static getAddProfile(req,res){
        res.send(`getAddProfile`)
    }

    static postAddProfile(req,res){
        res.send(`postAddProfile`)
        
    }

    static getEditProfile(req,res){
        res.send(`getEditProfile`)
        
    }

    static postEditProfile(req,res){
        res.send(`postEditProfile`)
        
    }

    static myProfile(req,res){
        res.send(`myprofile`)
    }
}

module.exports = ProfileController