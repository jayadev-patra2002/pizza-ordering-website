import { Login } from "./login";
import React, { useEffect } from "react";
export default function Loginscreen()
{    
   useEffect(()=>
  {
    if(localStorage.getItem('currentUser')){
         window.location.href='/'
    }

})
    return(
        <>
          <Login></Login>
        </>
    )
}