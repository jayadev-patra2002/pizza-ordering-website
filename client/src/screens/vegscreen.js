import React,{useState,useEffect} from 'react'
import { UseSelector,useDispatch, useSelector } from 'react-redux'
import Pizza from '../components/Pizza'
import { getsearchpizzas } from '../actions/searchAction'
import Loading from '../components/loading'
import Error from '../components/error'
import { Search } from '../components/search_filter'
export default function Vegscreen()
{   
    const dispatch=useDispatch()

    const vegstate=useSelector(state=>state.getSearchReducer)

    const {pizzas,error,loading}=vegstate

    useEffect(()=>{
       dispatch(getsearchpizzas)
    },[])
    return(
        <>
        <div>
           <div className="row justify-content-center">
             <Search/>
             <hr/>
             <h1 style={{fontSize:'65px',color:"black",height:'40px',fontWeight:'700'}}><img src='https://freesvg.org/img/1531813273.png' style={{height:'25px',width:'25px',marginRight:'10px'}}/>Veg Pizzas</h1><hr/>
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