import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { loginUser } from '../actions/userAction';
import Loading from '../components/loading';
import Error from '../components/error';
export function Login() {
  const dispatch=useDispatch()
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  const loginstate=useSelector(state=>state.loginUserReducer)
  const {loading,error}=loginstate
  function loginuser()
  {  
    const user={email,password}
    dispatch(loginUser(user))
  }
  return (
    <MDBContainer className=" " style={{width:'900px',height:'500px',boxShadow:'0px 0px 4px 2px grey',borderRadius:'20px',marginTop:'90px'}}>

      <MDBRow>

        <MDBCol col='2' md='6' style={{marginTop:'45px'}}>
          <img src="https://ncetir.com/Images/login@4x.png" class="img-fluid" alt="Sample image" />
        </MDBCol>

        <MDBCol col='2' md='5'>

          <div className="d-flex flex-row align-items-center justify-content-center" style={{marginTop:'69px'}}>

            <p className='' style={{marginTop:'0px',fontWeight:'550',fontSize:'27px'}}>Sign in</p>
            
         </div>

            {loading && <Loading/>}
            {error && <Error error='Invalid Credentials'/>}
     

          <MDBInput wrapperClass='mb-4' placeholder='Email address' id='formControlLg1' type='email' value={email} onChange={(e)=>{setemail(e.target.value)}} />
          <MDBInput wrapperClass='mb-5' placeholder='Password' id='formControlLg2' type='password'  value={password} onChange={(e)=>{setpassword(e.target.value)}}/>

          <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="#">Forgot password?</a>
          </div>

          <div className='text-center text-md-start mt-4 pt-2'>
            <button className='btn' onClick={loginuser} style={{boxShadow:'0px 0px 4px 1px grey',fontSize:'18px',width:'90px',backgroundColor:'red',color:'white',borderRadius:'12px'}}>Login</button>
            <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="/register" className="link-danger">Register</a></p>
          </div>

        </MDBCol>

      </MDBRow>

     

     

    </MDBContainer>
  );
}

