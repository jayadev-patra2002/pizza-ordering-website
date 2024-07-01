
import React,{useState,useEffect} from 'react'
import { UseSelector,useDispatch, useSelector } from 'react-redux'
import Pizza from '../components/Pizza'
import { getsearchpizzas } from '../actions/searchAction'
import Loading from '../components/loading'
import Error from '../components/error'
import { Search } from '../components/search_filter'
import { getSearchingPizzas } from '../actions/searchAction'
export default function SearchPizzaScreen()
{   
    

    const pizzastate=useSelector(state=>state.getSearchPizzaReducer)
    const dispatch=useDispatch();
    const {pizza,error,loading}=pizzastate
    useEffect(()=>{
        dispatch(getSearchingPizzas)
    },[])
    return(
        <>
        <div>
           <div className="row justify-content-center">
             <Search/>
             <h1 style={{fontWeight:'550',backgroundColor:'black',color:'whitesmoke'}}>-- Searched Pizzas --</h1>
             <hr/>

             {/* <h1 style={{fontSize:'65px',color:"black",height:'40px',fontWeight:'700'}}><img src='https://freesvg.org/img/1531813273.png' style={{height:'25px',width:'25px',marginRight:'10px'}}/>Veg Pizzas</h1><hr/> */}
              {loading ? <Loading/> : error ? <Error error='Something went wrong'/> : 
             (pizza.map(pizza=>{
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