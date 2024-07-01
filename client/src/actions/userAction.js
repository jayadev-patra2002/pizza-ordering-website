import axios from "axios";
export const registerUser=(user)=>async dispatch=>{
   
    dispatch({type:'USER_REGISTER_REQUEST'})
  
    try{
         const response=await axios.post('/api/users/register',user)
         console.log(response)
         dispatch({type:'USER_REGISTER_SUCCESS'})
    }
    catch(error){
        dispatch({type:'USER_REGISTER_FAILED',payload:{message :error}})
    }
}
export const loginUser=(user)=>async dispatch=>{
   
    dispatch({type:'USER_LOGIN_REQUEST'})
  
    try{
         const response=await axios.post('/api/users/login',user)
         console.log(response)
         dispatch({type:'USER_LOGIN_SUCCESS',payload:response.data})
         localStorage.setItem('currentUser',JSON.stringify(response.data))
         window.location.href='/'
    }
    catch(error){
        dispatch({type:'USER_LOGIN_FAILED',payload:{message :alert('Invalid User Please Register ⚠️')}})
    }
}

export const logoutuser=()=>dispatch=>{
       localStorage.removeItem('currentUser')
       localStorage.removeItem('cartItems')
       window.location.href='/Login'
}
export const allUsers=()=>async dispatch=>{
   
    dispatch({type:'ALL_USER__REQUEST'})
  
    try{
         const response=await axios.get('/api/users/allusers')
         console.log(response)
         dispatch({type:'ALL_USER_SUCCESS',payload:response.data})
    }
    catch(error){
        dispatch({type:'ALL_USER_FAILED',payload:{message :error}})
    }
}
export const deleteUsers=(userid)=>async dispatch=>{
   
    dispatch({type:'DELETE_USER__REQUEST'})
  
    try{
         const response=await axios.post('/api/users/deleteusers',{userid})
         console.log(response)
         dispatch({type:'DELETE_USER_SUCCESS',payload:response.data})
         alert("User Deleted")
         window.location.reload();
    }
    catch(error){
        dispatch({type:'DELETE_USER_FAILED',payload:{message :error}})
    }
}