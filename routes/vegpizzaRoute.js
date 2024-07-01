const express=require('express')
const router=express.Router()

const Pizza=require('../models/pizzamodels')
const vegpizza=Pizza.pizzamodel

router.get('/vegpizzas',async(req,res)=>{
    
    try{
       const pizzas=await vegpizza.find({category:'veg'})
       res.send(pizzas)
    }
  catch(error){
      return res.status(400).json({message:error})
  }

});
router.get('/nonvegpizzas',async(req,res)=>{
    
    try{
       const pizzas=await vegpizza.find({category:'nonveg'})
       res.send(pizzas)
    }
  catch(error){
      return res.status(400).json({message:error})
  }
  });

  router.post('/searchpizzas',async(req,res)=>{
     const searchpizza=req.body.pizzaname
    try{
       const pizzas=await vegpizza.find({name:searchpizza})
       res.send(pizzas)
    }
  catch(error){
      return res.status(400).json({message:error})
  }
});

module.exports=router;