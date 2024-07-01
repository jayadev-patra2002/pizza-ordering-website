const express=require("express")
const db=require('./db.js')

const pizzamodel=require('./models/pizzamodels.js')
// const pizza1=pizzamodel.pizzamodel
const app=express()
const pizzasRoute=require('./routes/pizzasRoute.js')
const userRoute=require('./routes/userRoute.js')
const orderRoute=require('./routes/orderRoute.js')
const vegpizzaRoute=require('./routes/vegpizzaRoute.js')
app.use(express.json())

app.use('/api/pizzas/',pizzasRoute)
app.use('/api/users/',userRoute)
app.use('/api/orders/',orderRoute)
app.use('/api/search/',vegpizzaRoute)
app.get('/',(req,res)=>{
    res.send("server is running....")
})

const port=process.env.PORT || 5000

 app.listen(port,()=>{
    console.log(`sever is running... on port ${port}`)
})
