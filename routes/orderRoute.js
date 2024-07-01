const express=require('express')
const router=express.Router()
const stripe=require('stripe')('sk_test_51OwduOSIBAD4SXoVcJzGgagv2mkR0uEn90tfGISDdAe6OZwd76YIqTk8IOzvvnLfxHLQaMI9y6M92wsxaNrYZsuw00cU9J1O7N')
const { v4: uuidv4 } = require('uuid');
const order=require('../models/orderModel')
const orders=order.orderSchema
router.post('/placeorder',async(req,res)=>{

    const {token,subtotal,currentUser,cartItems}=req.body
    try{
    const customer=await stripe.customers.create({
        email:token.email,
        source:token.id
    })
    const paymentIntent = await stripe.paymentIntents.create({
        amount:subtotal*100,
       currency: 'inr',
       customer:customer.id,
       receipt_email:token.email,
       automatic_payment_methods: {
           enabled: true,
  }},
     {
        idempotencyKey: uuidv4()
     })
    if(paymentIntent)
    {   
        const neworder=new orders({
            name:currentUser.name,
            email:customer.email,
            userId:currentUser._id,
            orderItems:cartItems,
            orderAmount:subtotal,
            shippingAddress:{
                street:token.card.address_line1,
                city:token.card.address_city,
                country:token.card.address_country,
                pincode:token.card.address_zip
            },
            transactionId:paymentIntent.id
        })
        neworder.save();
        res.send('Order Placed Successfully')
    }
    else{
        res.send('payment is Failed')
    }
}
catch(error){
   res.status(400).json({message:'something went wrong', error})
}
})

router.post('/getuserorders',async(req,res)=>{
    const {userId} =req.body
    try{
        const Orders=await orders.find({userId : userId}).sort({orderAmount:1})
        res.send(Orders)
    }
    catch(error)
    {
        res.status(400).json({message:'something went wrong'+error})
    }
})
router.get('/alluserorders',async(req,res)=>{
    try{
        const Orders=await orders.find({})
        res.send(Orders)
    }
    catch(error)
    {
        res.status(400).json({message:'something went wrong'+error})
    }
})
router.post('/deliverorders',async(req,res)=>{
     const deliver=req.body.orderid
    try{
        const Orders=await orders.findOne({_id:deliver})
        Orders.isDelivered=true
        await Orders.save();
        res.send("Order Delivered Successfully")
    }
    catch(error)
    {
        res.status(400).json({message:'something went wrong'+error})
    }
})
module.exports=router


