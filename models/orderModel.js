const mongoose=require('mongoose')

const {Schema}=mongoose

const orderschema=new Schema({
     name:{type:String,require},
     email:{type:String,require},
     userId:{type:String,require},
     orderItems:[],
     shippingAddress:{type:Object},
     orderAmount:{type:Number,require},
     isDelivered:{type:Boolean,require,default:false},
     transactionId:{type:String,require}
},
{
    timestamps:true
})

const orderSchema=mongoose.model('orders',orderschema)

exports.orderSchema=orderSchema