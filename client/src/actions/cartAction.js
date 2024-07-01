import Success from "../components/success"
export const addTocart=(pizza, quantity ,varient)=>(dispatch,getState)=>{
     
      var cartItem={
          name: pizza.name,
          _id: pizza._id,
          image:pizza.image,
          varient:varient,
          quantity:Number(quantity),
          prices:pizza.prices,
          price:pizza.prices[0][varient]*quantity


      }

      if(cartItem.quantity>10)
      {
        alert('You Can not add more than 10 quantity')
      }
      else
      {
        if(cartItem.quantity<1)
        {
            
             alert('You have to add atleast 1 quantity')
            dispatch({type:'DELETE_TO_CART',payload:pizza})
        }
        else{
            
            dispatch({type:'ADD_TO_CART',payload:cartItem})
             
          }
          
          
          
        }
        
        const cartItems=getState().cartReducer.cartItems
          
        localStorage.setItem('cartItems',JSON.stringify(cartItems))

}

export const deleteFromcart=(pizza)=>(dispatch,getState)=>{
    

    dispatch({type:'DELETE_TO_CART',payload:pizza})

    const cartItems=getState().cartReducer.cartItems

    localStorage.setItem('cartItems',JSON.stringify(cartItems))

}
