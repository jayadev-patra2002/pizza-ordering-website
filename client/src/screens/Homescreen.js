import React,{useState,useEffect} from 'react'
import { UseSelector,useDispatch, useSelector } from 'react-redux'
import Pizza from '../components/Pizza'
import { getAllpizzas } from '../actions/pizzaAction'
import Loading from '../components/loading'
import Error from '../components/error'
import { Search } from '../components/search_filter'
export default function Homescreen()
{   
    const dispatch=useDispatch()

    const pizzasstate=useSelector(state=>state.getAllpizzasReducer)

    const {pizzas,error,loading}=pizzasstate

    useEffect(()=>{
       dispatch(getAllpizzas)
    },[])
    return(
        <>
        <div>
           <div className="row justify-content-center">
             <Search/>
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