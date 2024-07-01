import React,{useState,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import {Modal} from 'react-bootstrap';
import { UseSelector,useDispatch, useSelector } from 'react-redux';
import { addTocart } from '../actions/cartAction';
import Card from 'react-bootstrap/Card';
import { registerUser } from '../actions/userAction';
import Success from './success';
import Error from './error';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import Loading from './loading';
import Checkout from './Checkout';

export function BasicExample({subtotal}) {
  return (
    <Card style={{boxShadow:'0px 0px 7px 1px grey',width: '30rem',height:'35rem',marginLeft:'40px',marginTop:'20px' ,borderRadius:'15px',border:'1px solid black'}}>
      <Card.Img  src="https://stockpsd.net/wp-content/uploads/2019/02/pizza_restaurant_free_psd_flyer_template_by_99flyers_dd0rilj-fullview.jpg" style={{height:'25rem',width:'30rem',borderRadius:'12px'}} />
      <Card.Body>
        <Card.Title style={{fontSize:'30px',color:'black'}}>--Sub-Total--</Card.Title>
        <Card.Text style={{fontSize:'25px',fontWeight:'400'}}>
           Price : {subtotal} Rs/-
        </Card.Text>
            <Checkout subtotal={subtotal}/>
      </Card.Body>
    </Card>
  );
}


export default function Pizza({pizza}){
    const [quantity ,setquantity] =useState(1)
    const [varient,setvarient]=useState('small')

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch=useDispatch();
    function addtocart()
    {
      dispatch(addTocart(pizza,quantity,varient))
    }
    
    return(
        <div  className='shadow p-3 mb-5 bg-white rounded'> 
            
            <div onClick={handleShow} >
            <h1>{pizza.name}</h1>
            <img src={pizza.image} className='img-fluid' style={{height:'220px',width:'220px'}} alt="images"/>
            </div>
            <div className="flex-container">
                <div className='w-100 m-1'>
                   <p className="varient">varients</p>
                   <select className='form-control' value={varient} onChange={(e)=>{
                    setvarient(e.target.value)
                   }}>
                      {pizza.varients.map(varient=>{
                          return <option value={varient}>{varient}</option>
                      })}
                   </select>
                </div>
                <div className='w-100 m-1'>
                   <p className="quantity">Quantity</p>
                   <select className='form-control'value={quantity} onChange={(e)=>{
                    setquantity(e.target.value)
                   }}>
                      {[...Array(10).keys()].map((i)=>{
                        return <option value={i+1}>{i+1}</option>
                      })}
                   </select>
                </div>
            </div>
            <div className='flex-container'>
                <div className='m-1 w-100'>
                     <h1 className='mt-1'>Price :{pizza.prices[0][varient] * quantity} Rs/-</h1>
                </div>
                <div className='m-1 w-100'>
                    <button className='btn'onClick={addtocart}>ADD TO CART</button>
                  
                </div>
            </div>


  
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <img src={pizza.image} className='img-fluid' style={{height:'250px',width:'250px',marginLeft:'120px'}} alt="images"/>
        </Modal.Body>

        <Modal.Footer>
            <p>{pizza.description}</p>
          <Button className='btn' onClick={handleClose}>Close</Button>
         
        </Modal.Footer>
      </Modal>
   

</div>
    )



}

export function Register() {
  
  const [name,setname]=useState('')
   const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  const[cpassword,setcpassword]=useState('')
  const[check,setcheck]=useState('false')
  const registerstate=useSelector(state=>state.registerUserReducer)
  const {error,loading,success}=registerstate
  function truefalse()
  {   
     if(check==='true')
     {
       setcheck('false')
     }
     else{
       setcheck('true')
     }
  }
  const dispatch=useDispatch()
    function register(){
      
       if(password !==cpassword)
       {
         alert('Incorrect Password ⚠️')
       }
       else{
        if(check==='false')
        {
          alert('Click agree to accept the Term and Condition')
        }
        else{
           const user={
            name,
            email,
            password
         }
         console.log(user)
         if(user.email==setemail())
         {
          alert('User already Registered')
         }
         else if(name==''&& email ==''&&password =='')
          {
           alert("Check the name,email and Password")
          }
         else{

              dispatch(registerUser(user))

         }
        }

       }
    }
  return (
    <MDBContainer style={{width:'900px'}}>

      <MDBCard className='text-black' style={{borderRadius: '25px',marginTop:'100px',height:'550px',boxShadow:'0px 0px 8px 1px grey'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p classNAme="text-center mb-8" style={{fontWeight:'620',fontSize:'25px',marginTop:'40px'}}>Sign up</p>
                 
                 {loading && <Loading/>}
                 {success && <Success success='User Registered Successfully'/>}
                 {error && <Error error='User is already Regstered'/>}
              <div className="d-flex flex-row align-items-center mb-4 ">
               	<MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput placeholder='Your Name' id='form1' type='text' className='w-100' value={name} onChange={(e)=>{
                  setname(e.target.value)}}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput placeholder='Your Email' id='form2' type='email' value={email} onChange={(e)=>{setemail(e.target.value)}}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput placeholder='Password' id='form3' type='password' value={password} onChange={(e)=>{
                  setpassword(e.target.value) }}/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size='lg'/>
                <MDBInput placeholder='Confirm your password' id='form4' type='password' value={cpassword} onChange={(e)=>{setcpassword(e.target.value)}}/>
              </div>

              <div className='mb-4' style={{display:'inline'}}>
                <MDBCheckbox name='flexCheck' onChange={truefalse} value={check} id='flexCheckDefault' label='I agree all statements in'/><a href=''>Term of services</a>
              </div>
	
              <button className='btn' onClick={register} style={{border:'1px solid grey',boxShadow:'0px 0px 2px 1px grey',color:'white',backgroundColor:'red',borderRadius:'7px',fontSize:'17px'}}>Register</button>
              
            </MDBCol>

            <MDBCol md='8' lg='6' className='order-1 order-lg-2  align-items-center' style={{marginTop:'20px'}}>
              <MDBCardImage src='https://www.allen.ac.in/ace2223/assets/images/register.png' fluid/>
            </MDBCol>
            
          </MDBRow>
           
            <p className=" " style={{marginRight:'420px',marginTop:'15px',fontWeight:'550'}}>Have an account? <a href="/Login" className="link-danger">Login</a></p>
         
        </MDBCardBody>
      </MDBCard>



      <link
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        rel="stylesheet"
        />
      <link
        href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
        rel="stylesheet"
        />

    </MDBContainer>
  );
}





