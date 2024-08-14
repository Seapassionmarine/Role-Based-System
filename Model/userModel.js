const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    FullName:{type:String,require:true,trim:true},
    Email:{type:String,require:true,unique:true},
    Password:{type:String,require:true},
    Score:{
        HTML:{
            type:Number,
        },
        CSS:{
            type:Number,
        },
        Javascript:{
             type:Number,
        },
        Remark:{
            type:String,
        },
    },
    blacklist:[],
    isAdmin:{type:Boolean,default:false},
    isVerified:{type:Boolean,default:false},

},{timestamps:true})
  
const UserModel = mongoose.model('User',UserSchema);

module.exports = UserModel