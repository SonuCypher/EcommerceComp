const { default: mongoose } = require("mongoose");


const userSchema = mongoose.Schema({
    username:{
        type:String,
        lowercase:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    }
})

module.exports.Users = mongoose.model('Users',userSchema)