const mongoose=require("mongoose")

const UserSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    title:{
             type:String,
        required:true
    },
    Department:{
             type:String,
        required:true
    },
    Role:{
             type:String,
        required:true
    },
    createdTime:{
        type:Date,
        default:Date.now()
    }

})

module.exports=mongoose.model("userdata",UserSchema)