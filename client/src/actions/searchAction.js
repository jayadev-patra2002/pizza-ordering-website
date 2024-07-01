import axios from 'axios'
export const getsearchpizzas=async(dispatch)=>{
    
     dispatch({type:'SEARCH_PIZZAS_REQUEST'})

     try{
        const responce = await axios.get('/api/search/vegpizzas')
        dispatch({type:'SEARCH_PIZZAS_SUCCESS', payload:responce.data})

     }
     catch(error){
        dispatch({type:'SEARCH_PIZZAS_FAILED',payload:error})

     }
}
export const getnonvegpizzas=async(dispatch)=>{
    
    dispatch({type:'SEARCH_PIZZAS_REQUEST'})

    try{
       const responce = await axios.get('/api/search/nonvegpizzas')
       dispatch({type:'SEARCH_PIZZAS_SUCCESS', payload:responce.data})

    }
    catch(error){
       dispatch({type:'SEARCH_PIZZAS_FAILED',payload:error})

    }
}

export const getSearchingPizzas=(pizzaname)=>async(dispatch,getState)=>{
    
   dispatch({type:'SEARCHING_PIZZAS_REQUEST'})

   try{
      const responce = await axios.post('/api/search/searchpizzas',{pizzaname})
      
      dispatch({type:'SEARCHING_PIZZAS_SUCCESS', payload:responce.data})
      const searchpizza=getState().getSearchPizzaReducer.pizza

      localStorage.setItem('searchPizza',JSON.stringify(searchpizza))
   }
   catch(error){
      dispatch({type:'SEARCHING_PIZZAS_FAILED',payload:error})

   }
}
// export const SearchedPizza=(pizza)=>(dispatch,getState)=>{
    

//    dispatch({type:'SEARCHED_PIZZA',payload:pizza})

//    const searchpizza=getState().getSearchPizzaReducer.pizza

//    localStorage.setItem('cartItems',JSON.stringify(searchpizza))

// }