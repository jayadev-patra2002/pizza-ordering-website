import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { addTocart } from '../actions/cartAction';
import { deleteFromcart } from '../actions/cartAction';
import { BasicExample } from '../components/Pizza';
export default function Cartscreen()
{  
    const cartstate=useSelector(state=>state.cartReducer)
     const dispatch=useDispatch()
    const cartItems=cartstate.cartItems
    var subtotal=cartItems.reduce((x,item)=>x+item.price,0)
    return(
        <>
       <div className="row justify-content-center">
           <div className="col-md-6">
               <hr/>
               <h2 style={{fontWeight:'500',fontSize:'37px', marginTop:'40px'}}>-- My Cart --</h2>
               <hr/>
               {cartItems.map(item=>{
               return <div className='flex-container shadow-sm p-3 mb-5 bg-body rounded'>
                        <div className='text-start'>
                          <h1> {item.name}[{item.varient}]</h1>
                          <h1>Price :{item.quantity}*{item.prices[0][item.varient]}={item.price}</h1>
                          <h1 style={{display:'inline'}}>Quantity:</h1> <i className="bi bi-plus" onClick={()=>{dispatch(addTocart(item,item.quantity+1,item.varient))}}></i>
                           <h1 style={{display:'inline'}}>{item.quantity}</h1> <i className="bi bi-dash" onClick={()=>{dispatch(addTocart(item,item.quantity-1,item.varient))}}></i>
                         
                        </div>
                        
                        <div className='w-50 m-3'>
                            <img src={item.image} style={{height:'100px',width:'100px' }}/>
                           
                        </div>

                        <div className='m-5 w-30'>
                        <i className="bi bi-trash3-fill" onClick={()=>{dispatch(deleteFromcart(item))}}></i>
                        </div>
                           
                    </div>
                 
               })}
           </div>
          
           <div className="col-md-4">
              <BasicExample subtotal={subtotal}/>
           </div>
       </div>

       </>
    )
}