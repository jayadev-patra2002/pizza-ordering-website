import axios from 'axios'
export const getAllpizzas=async(dispatch)=>{
    
     dispatch({type:'GET_PIZZAS_REQUEST'})
   
     try{
        const responce= await axios.get('/api/pizzas/getallpizzas')
        console.log(responce)
        dispatch({type:'GET_PIZZAS_SUCCESS', payload:responce.data})

     }
     catch(error){
        dispatch({type:'GET_PIZZAS_FAILED',payload:error})

     }
}

export const addpizzas=(pizzadetails)=>async(dispatch)=>{
    
   dispatch({type:'ADD_PIZZA_REQUEST'})
 
   try{
      const responce= await axios.post('/api/pizzas/addpizzas',{pizzadetails})
      console.log(responce)
      dispatch({type:'ADD_PIZZA_SUCCESS', payload:responce.data})

   }
   catch(error){
      dispatch({type:'ADD_PIZZA_FAILED',payload:error})

   }
}

export const editPizzas=(pizzaid)=>async(dispatch)=>{
    
   dispatch({type:'EDIT_PIZZA_REQUEST'})
 
   try{
      const responce= await axios.post('/api/pizzas/editpizzas',{pizzaid})
      console.log(responce)
      dispatch({type:'EDIT_PIZZA_SUCCESS', payload:responce.data})

   }
   catch(error){
      dispatch({type:'EDIT_PIZZA_FAILED',payload:error})

   }
}

export const updatePizzas=(updatepizza)=>async(dispatch)=>{
    
   dispatch({type:'UPDATE_PIZZA_REQUEST'})
 
   try{
      const responce = await axios.post('/api/pizzas/updatepizzas',{updatepizza})
      console.log(responce)
      dispatch({type:'UPDATE_PIZZA_SUCCESS', payload:responce.data})
      window.location.href='/admin/pizzalist'
   }
   catch(error){
      dispatch({type:'UPDATE_PIZZA_FAILED',payload:error})

   }
}

export const deletePizzas=(pizzaid)=>async(dispatch)=>{
    
   dispatch({type:'DELETE_PIZZA_REQUEST'})
 
   try{
      const responce = await axios.post('/api/pizzas/deletepizzas',{pizzaid})
      console.log(responce)
      dispatch({type:'DELETE_PIZZA_SUCCESS', payload:responce.data})
      alert("Pizza Deleted Successfully")
      window.location.reload();
   }
   catch(error){
      alert("Something went wrong")
      dispatch({type:'DELETE_PIZZA_FAILED',payload:error})

   }
}