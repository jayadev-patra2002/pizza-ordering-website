import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addpizzas } from '../actions/pizzaAction'
import Loading from '../components/loading'
import Error from '../components/error'
import Success from '../components/success'

export default function Addnewpizza()
{ 
    const[pizza,setpizza]=useState('')
    const[small,setsmall]=useState('')
    const[medium,setmedium]=useState('')
    const[large,setlarge]=useState('')
    const[category,setcategory]=useState('')
    const[description,setdescription]=useState('')
    const[image,setimage]=useState('')
    
    const pizzastates=useSelector(state=>state.addpizzasReducer)
    const {loading ,error ,success}=pizzastates
    const dispatch=useDispatch();

    function formHandler(e){
       e.preventDefault();
        const pizzadetails={
            pizza,
            category,
            description,
            image,
            prices:{
                small:small,
                medium:medium,
                large:large
            }
        }
       console.log(pizzadetails)
       dispatch(addpizzas(pizzadetails))
    }
   
    return(
        <div>
             <h1 style={{fontWeight:'550'}}>Add new pizza</h1>
             <hr/>
             {loading && <Loading/>}
             {error && <Error error="Something went wrong"/>}
             {success && <Success success="New Pizza Added Successfully"/>}
             <form className="shadow p-4 mb-6 bg-body rounded" onSubmit={formHandler}>
                <input  className='form-control mb-4' type='text' placeholder='Pizza Name' value={pizza} onChange={(e)=>{setpizza(e.target.value)}}/>
                <input className='form-control mb-4' type='text' placeholder='Small varient price' value={small} onChange={(e)=>{setsmall(e.target.value)}}/>
                <input className='form-control mb-4' type='text' placeholder='Medium varient price' value={medium} onChange={(e)=>{setmedium(e.target.value)}}/>
                <input className='form-control mb-4' type='text' placeholder='Large varient price' value={large} onChange={(e)=>{setlarge(e.target.value)}}/>
                <input className='form-control mb-4' type='text' placeholder='Category' value={category} onChange={(e)=>{setcategory(e.target.value)}}/>
                <input className='form-control mb-4' type='text' placeholder='Description' value={description} onChange={(e)=>{setdescription(e.target.value)}}/>
                <input className='form-control mb-4' type='text' placeholder='Image_url' value={image} onChange={(e)=>{setimage(e.target.value)}}/>
                <button className='btn' type='submit'>Add Pizza</button>
           
             </form>
        </div>
    )
}