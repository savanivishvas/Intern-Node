const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    age:{
        type:Number
    },
    roleId:{
        type:Schema.Types.ObjectId,
        ref:"roles"
    },
    status:{
        type:Boolean
    },
    email:{
        type:String,
    },
    password:{
        type:String,
        unique:true,
    }
})

module.exports = mongoose.model("users",userSchema);