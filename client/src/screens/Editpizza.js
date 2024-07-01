import React, { useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { editPizzas, updatePizzas } from "../actions/pizzaAction";
import Loading from "../components/loading";
import Error from "../components/error";
import Success from "../components/success";
export default function EditPizza(){
    const editpizzastate=useSelector(state=>state.EditpizzasReducer)
    const updatePizzastate=useSelector(state=>state.UpdatepizzasReducer)
    const dispatch=useDispatch()
    const {pizzaid}=useParams();
    useEffect(()=>{
         dispatch(editPizzas(pizzaid))
    },[])
    const[pizzaname,setpizzaname]=useState('')
    const[small,setsmall]=useState('')
    const[medium,setmedium]=useState('')
    const[large,setlarge]=useState('')
    const[category,setcategory]=useState('')
    const[description,setdescription]=useState('')
    const[image,setimage]=useState('')
    
    const {loading ,error ,pizza}=editpizzastate
    const {editloading,editsuccess}=updatePizzastate

    function formHandler(e){
      e.preventDefault();
       const updatepizza={
            _id:pizzaid,
            pizzaname,
            category,
            description,
            image,
            prices:{
                small:small,
                medium:medium,
                large:large
            }
        }
       console.log(updatepizza)
    dispatch(updatePizzas(updatepizza))
    
}
useEffect(()=>{
   if(pizza)
   {
      if(pizza._id===pizzaid)
      {
        setpizzaname(pizza.name)
        setsmall(pizza.prices[0]['small'])
        setmedium(pizza.prices[0]['medium'])
        setlarge(pizza.prices[0]['large'])
        setcategory(pizza.category)
        setdescription(pizza.description)
        setimage(pizza.image)
      }
      else{
        dispatch(editPizzas(pizzaid))
      }
   }
   else{
    dispatch(editPizzas(pizzaid))
   }
},[pizza,dispatch])

    return(
        <div>
            
            <h1>Edit Pizza</h1>
            <h1>Pizza Id : {pizzaid} </h1>
            <div>
             <hr/>
                 {loading && <Loading/>} 
                {error && <Error error="Something went wrong"/>}
                {editsuccess && (<Success success="Pizza Updated Successfully"/>)}
                {editloading && (<Loading/>)}

             <form className="shadow p-4 mb-6 bg-body rounded" onSubmit={formHandler}>
                <input  className='form-control mb-4' type='text' placeholder='Pizza Name' value={pizzaname} onChange={(e)=>{setpizzaname(e.target.value)}}/>
                <input className='form-control mb-4' type='text' placeholder='Small varient price' value={small} onChange={(e)=>{setsmall(e.target.value)}}/>
                <input className='form-control mb-4' type='text' placeholder='Medium varient price' value={medium} onChange={(e)=>{setmedium(e.target.value)}}/>
                <input className='form-control mb-4' type='text' placeholder='Large varient price' value={large} onChange={(e)=>{setlarge(e.target.value)}}/>
                <input className='form-control mb-4' type='text' placeholder='Category' value={category} onChange={(e)=>{setcategory(e.target.value)}}/>
                <input className='form-control mb-4' type='text' placeholder='Description' value={description} onChange={(e)=>{setdescription(e.target.value)}}/>
                <input className='form-control mb-4' type='text' placeholder='Image_url' value={image} onChange={(e)=>{setimage(e.target.value)}}/>
                <button className='btn' type='submit'>Edit Pizza</button>
           
             </form>
        </div>
    
        </div>
    )
}