import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { useSelector, useDispatch } from 'react-redux';
import { placeOrder } from '../actions/orderAction';
import Loading from '../components/loading';
import Error from '../components/error';
import Success from '../components/success';
export default function Checkout({subtotal})
{  
     const dispatch=useDispatch()
     const orderstate=useSelector(state=>state.placeOrderReducer)
     const {loading , error ,success }=orderstate
    function tokenHandler(token)
    {
        console.log(token)
        dispatch(placeOrder(token,subtotal))
    }
    return (
        <>
          <StripeCheckout  amount={subtotal*100} shippingAddress token={tokenHandler} currency='INR' stripeKey='pk_test_51OwduOSIBAD4SXoVFsJwCHPEE1RKBQNuvml8HcNiiEFJRV8kgAR8sDBVEQhAecMEdTzR1rgtSE09si3YpLZas7kp00pSPZkUfB'>
               <button style={{height:'40px',width:'100px',backgroundColor:'red',color:'white',borderRadius:'10px',boxShadow:'0px 0px 3px 1px grey',fontWeight:'500'}}>Pay Now</button>
          </StripeCheckout>
          <div style={{marginTop:'10px'}}> 
          {loading && <Loading/>}
          {error && <Error error="Something went wrong"/>}
          {success && <Success success="Order Placed Successfully"/>}
          </div>
        </>
    )
}