const { Users } = require("../model/users")
const jwt = require("jsonwebtoken");
const SECRETKEY = "JWTSECRET";

module.exports.Validation = async(req,res,next)=>{
    try {
        const user = req.body
        const currentUser = await Users.findOne({username: user.username})
        if(currentUser){
           res.json({ message:'User already exist'}) 
            
        }else{
            next()
        }
    } catch (error) {
        res.json({ message: error.message })   
    }
}

module.exports.roleValidation = async(req, res, next) => {
    try {
        const token = req.cookies.jwt
        if(token){
            const decode = jwt.verify(token,SECRETKEY)
            if(decode.role === "seller"){
                next()
            }else{
                res.json({ message: "dont have permission"})
            }
        }else{
            res.json({ message:"you need to sign in"})
        }
    } catch (error) {
        
    }
}