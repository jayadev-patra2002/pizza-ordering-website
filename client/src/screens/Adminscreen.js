import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {BrowserRouter as Router, Link,Routes,Route, Outlet} from 'react-router-dom'
// import Userslist from './Userlist'
// import Pizzaslist from './Pizzalist'
// import Addnewpizza from './Addpizza'
// import OrderList from './Orderlist'


export default function AdminScreen()
{ 
    const userstate=useSelector(state=>state.loginUserReducer)
    const {currentUser}=userstate

    useEffect(()=>{
       if(!currentUser.isAdmin)
       {
         window.location.href='/'
       }
    },[])
    return(
        <div>
          <div className='row justify-content-center'>
            <div className='col-md-10'>
            <h2 style={{fontSize:'35px',fontWeight:'550'}}> Admin Panel </h2>
            <hr/>
            <ul className='adminlist'>
                <li><Link to='/admin/userlist' style={{color:"white"}}>Users List</Link></li>
                <li><Link to='/admin/pizzalist' style={{color:'white'}}>Pizzas List</Link></li>
                <li><Link to='/admin/addnewpizza' style={{color:"white"}}>Add new pizza</Link></li>
                <li><Link to='/admin/orderlist' style={{color:"white"}}>Orders List</Link></li>
    
            </ul>
            <Outlet/>
            </div>
           
            </div>
        </div>
    
    )
}