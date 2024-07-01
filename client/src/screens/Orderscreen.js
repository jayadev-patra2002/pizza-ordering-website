import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUserOrders } from "../actions/orderAction"
import Loading from "../components/loading"
import Error from "../components/error"
export default function Orderscreen()
{   
     
    const dispatch=useDispatch()
    const userorderstate=useSelector(state=>state.getUserOrdersReducer)
    const {loading , error ,orders}=userorderstate
     useEffect(()=>{
        dispatch(getUserOrders())
     },[])

     return(
        <div>
          <h2 style={{fontSize:'32px',fontWeight:'550'}}>My Orders</h2>
          <hr/>
         <div className="row justify-content-center">
        {loading && <Loading/>}
        {error && <Error error='Something went wrong'/>}
        {orders && orders.map(order=>{
                   return <div className="col-md-8 m-2" style={{backgroundColor:"red",color:'white'}}>
                            <div className="flex-container">
                              <div className="text-left w-100 m-1">
                                  <h2 style={{fontSize:'25px'}}>Items</h2>
                                  <hr/>
                                  {order.orderItems.map(items=>{
                                     return <div>        
                              <h1>{items.name}[{items.varient}]*{items.quantity}={items.price}</h1>
                              </div>
                                  })}
                              </div>
                              <div className="text-left w-100 m-1">
                                 <h2 style={{fontSize:'23px'}}>Address</h2>
                                 <hr/>
                                 <h1>Street:{order.shippingAddress.street}</h1>
                                 <h1>City:{order.shippingAddress.city}</h1>
                                 <h1>Country:{order.shippingAddress.country}</h1>
                                 <h1>Pincode:{order.shippingAddress.pincode}</h1>
                              </div>
                              <div className="text-left w-100 m-1">
                              <h2 style={{fontSize:'23px'}}>Order Info</h2>
                              <hr/>
                              <h1>Order Amount: {order.orderAmount}</h1>
                              <h1>Date: {order.createdAt.substring(0,10)}/Time: {order.createdAt.substring(11,19)}</h1>
                              <h1>Transaction_Id: {order.transactionId}</h1>
                              <h1>User_Id: {order.userId}</h1>
                              </div>
                           </div>
                          </div>
        })}
        </div>
        </div>
     )
}