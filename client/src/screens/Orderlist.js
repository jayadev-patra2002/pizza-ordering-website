import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../components/loading'
import Error from '../components/error'
import { getAllUserOrders,deliverOrders } from '../actions/orderAction'
export default function OrderList()
{ 
    const orderstate=useSelector(state=>state.getAllUserOrdersReducer)
    const {orders,loading,error}=orderstate
    const dispatch=useDispatch();
    useEffect(()=>{
         dispatch(getAllUserOrders())
    },[])

    return(
        <div>
             <u><h1 style={{fontWeight:'550'}}>Orders List</h1></u>
             {loading && <Loading/>}
             {error && <Error error='Something went wrong'/>}
           
              <table className='table table-bordered'>
                <thead className='table-dark'>
                <tr>
                    <th>Order ID</th>
                    <th>Email</th>
                    <th>User ID</th>
                    <th>Date/Time</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                    {orders && orders.map(order=>{
                        return <tr>
                            <td>{order._id}</td>
                            <td>{order.email}</td>
                            <td>{order.userId}</td>
                            <td>{order.createdAt.substring(0,10)}/{order.createdAt.substring(11,19)}</td>
                         <td>
                            {order.isDelivered ? (<b style={{color:'green'}}>Delivered</b>) : (<button className='btn' onClick={()=>{dispatch(deliverOrders(order._id))}}>Deliver</button>)}
                         </td>
                        </tr>
                    })}
                </tbody>
              </table>
        </div>
    )
}