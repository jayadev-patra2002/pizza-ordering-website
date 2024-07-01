const { Timestamp } = require('bson')
const mongoose=require('mongoose')

const {Schema}=mongoose

const pizzaschema = new Schema({
    
    name:{type:String,require},
    varients:[String],
    prices:[],
    category:{type:String,require},
    image:{type:String},
    description:{type:String, require},

 },
 {
  timestamp:true,
 })


const pizzamodel=mongoose.model('mypizza',pizzaschema)

exports.pizzamodel=pizzamodel