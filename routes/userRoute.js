const express=require('express')
const router=express.Router()

const user=require('../models/usermodel')

const User=user.userSchema

router.post('/register',(req,res)=>{
     const {name,email,password}= req.body
     const newUser=User({name,email,password})
     try{
        newUser.save()
        res.send('user registered successful')
     }
     catch(error)
     {
       return res.status(400).json({message:error})
     }
})

router.post('/login',async (req,res)=>{
     const {email,password}=req.body
     const user= await User.find({email,password})
  try{
     if(user.length>0)
     {
          const currentuser={
                name:user[0].name,
                email:user[0].email,
                password:user[0].password,
                isAdmin:user[0].isAdmin,
                _id:user[0]._id
          }
          res.send(currentuser);
     }
     else{
          res.status(400).json({message:'User Login Failed'})
     }
}
catch(error){
     res.status(404).json({message:error})
}


})

router.get('/allusers',async(req,res)=>{
      
     try{
        const response=await User.find({})
        res.send(response)
     }
     catch(error)
     {
       return res.status(400).json({message:error})
     }
})
router.post('/deleteusers',async(req,res)=>{
      const deleteuser=req.body.userid
     try{
        const response=await User.deleteOne({_id:deleteuser})
        res.send("User Deleted Successfully")
     }
     catch(error)
     {
       return res.status(400).json({message:error})
     }
})
module.exports=router
