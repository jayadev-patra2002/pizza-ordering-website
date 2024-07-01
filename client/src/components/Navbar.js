import React from 'react' 
// import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import { IoCart } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";
import { loginUserReducer } from '../reducers/userReducer';
import { logoutuser } from '../actions/userAction';

import { UseSelector,useDispatch, useSelector } from 'react-redux'
export default function Navbar(){
 const cartstate=useSelector(state=>state.cartReducer)
 const userstate=useSelector(state=>state.loginUserReducer)
 const {currentUser}=userstate
 const dispatch=useDispatch()
return(
  
<nav className="navbar navbar-expand-lg shadow-lg p-0 mb-4 bg-white rounded">
  <a className="navbar-brand" href="/"><img style={{height:'33x',width:'58px',marginLeft:'30px',boxShadow:'0px 0px 1px 1px grey',borderRadius:'10px'}}src='https://w7.pngwing.com/pngs/391/220/png-transparent-logo-pizza-border-food-text-orange.png' alt='pizza'></img></a>
  

    <ul className="navbar-nav">
   
      {currentUser ? (
      
       <div className="dropdown-center">
       <a className="dropdown-toggle" style={{color:'black',marginRight:'15px'}}href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      <li style={{boxShadow:'0px 0px 4px 2px grey',border:'1px solid black',borderRadius:'40%',height:'30px',width:'30px',marginRight:'12px',marginTop:'7px',backgroundColor:'#ffa500',textAlign:'center',fontWeight:'550',zIndex:'999999'}}>{currentUser.name.toUpperCase().slice(0,1)}</li>
       </a>
       <ul className="dropdown-menu">
         <li><a className="dropdown-item" style={{cursor:'pointer'}} href="/orders">Orders</a></li>
         <li><a className="dropdown-item" style={{cursor:'pointer'}} onClick={()=>{dispatch(logoutuser())}}>Logout</a></li>
       </ul>
      
     
     </div>):
      (<li className="nav-item"> 
      <a className="nav-link" href="/Login"><i className="bi bi-box-arrow-in-right"></i> Login <span className="sr-only"></span></a>
      </li>)}
      <li className="nav-item">
      <a className="nav-link" href="/cart"><IoCart style={{marginBottom:'3px',zIndex:'999999'}}></IoCart>Cart {cartstate.cartItems.length}</a>
      </li>
      
    </ul>

</nav>)
}