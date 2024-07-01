const mongoose=require('mongoose');

const {Schema} =mongoose
const userschema=new Schema({
    name:{type:String,require},
    email:{type:String,require},
    password:{type:String,require},
    isAdmin:{type:Boolean,require,default:false},
},
{

 timestamps:true,

})

const userSchema=mongoose.model('users',userschema)

exports.userSchema=userSchema