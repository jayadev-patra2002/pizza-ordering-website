import axios from "axios"
export const placeOrder=(token,subtotal)=>async(dispatch,getState)=>{
      
    dispatch({type:'PLACE_ORDER_REQUEST'})
    const currentUser=getState().loginUserReducer.currentUser
    const cartItems=getState().cartReducer.cartItems

    try{
    
        const response=await axios.post('/api/orders/placeorder',{token,subtotal,currentUser,cartItems})
        dispatch({type:'PLACE_ORDER_SUCCESS'})
       console.log(response)
    }
    catch(error)
    {  
       dispatch({type:'PLACE_ORDER_FAILED',payload:error})
       console.log(error)
    }
}

export const getUserOrders=()=>async(dispatch,getState)=>{
      
    dispatch({type:'GET_USER_ORDER_REQUEST'})
    const currentUser=getState().loginUserReducer.currentUser

    try{
    
        const response=await axios.post('/api/orders/getuserorders',{userId:currentUser._id})
        dispatch({type:'GET_USER_ORDER_SUCCESS',payload:response.data})
       console.log(response)
    }
    catch(error)
    {  
       dispatch({type:'GET_USER_ORDER_FAILED',payload:error})
       console.log(error)
    }
}

export const getAllUserOrders=()=>async(dispatch)=>{
      
    dispatch({type:'GET_ALL_ORDER_REQUEST'})
 

    try{
    
        const response=await axios.get('/api/orders/alluserorders')
        dispatch({type:'GET_ALL_ORDER_SUCCESS',payload:response.data})
        console.log(response)
    }
    catch(error)
    {  
       dispatch({type:'GET_ALL_ORDER_FAILED',payload:error})
       console.log(error)
    }
}
export const deliverOrders=(orderid)=>async(dispatch)=>{
      
    dispatch({type:'GET_DELIVER_REQUEST'})
 
      
    try{
    
        const response=await axios.post('/api/orders/deliverorders',{orderid})
        dispatch({type:'GET_DELIVER_SUCCESS',payload:response.data})
        console.log(response)
        window.location.reload();
        alert("Order Delivered")
    }
    catch(error)
    {  
       dispatch({type:'GET_DELIVER_FAILED',payload:error})
       console.log(error)
    }
}
