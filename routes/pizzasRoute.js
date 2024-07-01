const express=require('express')
const router=express.Router()

const Pizza=require('../models/pizzamodels');
const Pizza1=Pizza.pizzamodel

router.get('/getallpizzas',async(req,res)=>{
    
    try{
       const pizzas=await Pizza1.find({})
       res.send(pizzas)
       
    }
  catch(error){
      return res.status(400).json({message:error})
  }

});

router.post('/addpizzas',async(req,res)=>{
    
  try{
     const pizzas=req.body.pizzadetails
     const newpizza=new Pizza1({
          name:pizzas.pizza,
          varients:["small","medium","large"],
          prices:pizzas.prices,
          category:pizzas.category,
          image:pizzas.image,
          description:pizzas.description

     })
     await newpizza.save()
     res.send("New Pizza Added Successfully")
     
  }
catch(error){
    return res.status(400).json({message:error})
}

});

router.post('/editpizzas',async(req,res)=>{
     const pizzaid=req.body.pizzaid
  try{
     const pizzas=await Pizza1.findOne({_id:pizzaid})
     res.send(pizzas)
     
  }
catch(error){
    return res.status(400).json({message:error})
}

});

router.post('/updatepizzas',async(req,res)=>{
  const updatepizzas=req.body.updatepizza
try{
  const pizzas=await Pizza1.findOne({_id:updatepizzas._id})
     
      pizzas.name=updatepizzas.pizzaname,
      pizzas.prices=[updatepizzas.prices],
      pizzas.category=updatepizzas.category,
      pizzas.image=updatepizzas.image,
      pizzas.description=updatepizzas.description
  

  await pizzas.save()
  res.send("Updated Pizza Successfully")
  
}
catch(error){
 return res.status(400).json({message:error})
}

});


router.post('/deletepizzas',async(req,res)=>{
  const pizzaid=req.body.pizzaid
try{
  const pizzas=await Pizza1.findOneAndDelete({_id:pizzaid})

  res.send(pizzas)
  
}
catch(error){
 return res.status(400).json({message:error})
}

});
module.exports=router;