import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchingPizzas } from "../actions/searchAction";
import { Link,Outlet } from "react-router-dom";
import Pizza from "./Pizza";
import SearchPizzaScreen from "../screens/SearchPizzaScreen";
export function Search()
{   
   const [option,setoption]=useState(' ')
   const [search,setsearch]=useState('')
    const dispatch=useDispatch();
    function searching(e){
        e.preventDefault();
        if(search)
        {
          dispatch(getSearchingPizzas(search))
          if(localStorage.getItem('searchPizza'))
          {
            window.location.href='/search'
          }
       
      }
    }
  
    useEffect(()=>{
          if(option==='veg')
        {
            
            window.location.href='/veg'

        }
        else if(option === 'nonveg')
        {
            window.location.href='/nonveg'
        }
    },[option])
    
   
 
    return(
        <>
          <div  className='shadow bg-white rounded' style={{height:'69px',width:'860px',margin:'105px',justifyContent:"center"}}> 
          <form className="d-flex">
           <input className="form-control me-2" type="search" value={search} onChange={(e)=>{setsearch(e.target.value)}}placeholder="Search Pizzas.." aria-label="Search" style={{width:'360px',marginTop:'15px',border:'1px solid black',marginLeft:'10px'}}/>
           <select className="bg-white rounded" onChange={(e)=>{setoption(e.target.value)}} value={option} style={{width:'140px',height:'36px',marginTop:'15px',marginLeft:'20px'}}>
               <option value='all'>All</option>
               <option value='veg'>Veg</option>
               <option value='nonveg'>Non-veg</option>
           </select>
        <button className="btn btn-outline-success" type="submit" onClick={searching} style={{marginLeft:'200px',height:'40px',width:'86px',marginTop:'12px'}}>Search</button>
            </form>
          </div>
        </>
    )
}

