import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import Navbar from "./Navbar";

const Login = () => {
    let navigation = useNavigate()

    const[email ,setemail]= useState(null)
    const[password,setpassword]  = useState(null)
    const[Alert ,setAlert] = useState('')
    const[error ,seterror] = useState(null)

    // console.log(name);
    // console.log(password)

    const login = async(e)=>{
      e.preventDefault();
 let result  = await axios.get(`http://localhost:3000/Resister?q=${email}`);
 let pass  = await axios.get(`http://localhost:3000/Resister?q=${password}`);
 if(result.data.length>0 && pass.data.length>0){
  localStorage.setItem('login',JSON.stringify(result.data))
  seterror(false)
 alert("You are logged in")
 setAlert('You are logged in')
  navigation('/')
 }else {
  seterror(true)
  setAlert('check email and password')

 }
 console.log(result)
   
      

      
       
    }
  return (
    <div>
    <Navbar/>
    



    <div style={{maxWidth:"600px",height:'300px'}} className='container-md shadow-lg p-3 mb-5 bg-body rounded mt-4'>
    <h1 className='text-center '>Login</h1>
    <br/>
    <br/>
      <form onSubmit={(e)=>{login(e)}}>
  <div class="mb-3">
    
    <input type="email" onChange={(e)=>{setemail(e.target.value)}} placeholder='enter Your email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
   
  </div>
  <div class="mb-3">
  
    <input type="password" onChange={(e)=>{setpassword(e.target.value)}} placeholder='enter your password' class="form-control" id="exampleInputPassword1" required/>
  </div>
  <br/>
  
  
  
  
  <div class="d-grid gap-2">
  <button type='submit' class="btn btn-primary"  >login</button>
 
</div>
</form>



{/* error----------------message====box */}
    </div>
    {
      error===true?
      <div class="alert alert-danger alert-dismissible fade show" role="alert">
 {Alert}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
: null
    }
    
    
    </div>
  )
}

export default Login
