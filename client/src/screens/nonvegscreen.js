import React,{useState,useEffect} from 'react'
import { UseSelector,useDispatch, useSelector } from 'react-redux'
import Pizza from '../components/Pizza'
import { getsearchpizzas } from '../actions/searchAction'
import Loading from '../components/loading'
import Error from '../components/error'
import { Search } from '../components/search_filter'
import { getnonvegpizzas } from '../actions/searchAction'
export default function Nonvegscreen()
{   
    const dispatch=useDispatch()

    const nonvegstate=useSelector(state=>state.getSearchReducer)

    const {pizzas,error,loading}=nonvegstate

    useEffect(()=>{
       dispatch(getnonvegpizzas)
    },[])
    return(
        <>
        <div>
           <div className="row justify-content-center">
             <Search/>
             <hr/>
             <h1 style={{fontSize:'65px',color:"black",height:'40px',fontWeight:'700'}}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5OfgmRMdIZAGV-DKoPCUnbSK6kbQ6bDCYhQ&usqp=CAU' style={{height:'25px',width:'25px',marginRight:'10px'}}/>Non-Veg Pizzas</h1><hr/>
              {loading ? <Loading/> : error ? <Error error='Something went wrong'/> : 
             (pizzas.map(pizza=>{
                 return <div className="col-md-3 m-5" key={pizza._id}>
                    <div>
                        <Pizza pizza={pizza}/>
                    </div>
                </div>

               }))
            }
           </div>
        </div>
        </>
    )
}