import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Navbar from "./Navbar";

const Resister = () => {
    let navigate=useNavigate()
   const[Data,setData]=useState({
    name:'',
    email:'',
    password:''
   })


   const onchangeinpute = async(e)=>{

    setData({...Data ,[e.target.name]:e.target.value})
    console.log(Data)
   
 
 
 }

    const signUp  = async(e)=>{
        e.preventDefault();
      
        await axios.post(" http://localhost:3000/Resister",Data);
        alert('user has been added')
        navigate('/login')
 
    
    
    
    }

  return (
    <div>
    <Navbar/>
    <div style={{maxWidth:"600px",height:'400px'}} className='container-md shadow-lg p-3 mb-5 bg-body rounded mt-4'>
      <h1 className='text-center'>Resistration</h1>
      <br/>
      <form>
  <div class="mb-3">
    
    <input type="name" name='name' value={Data.name} onChange={(e)=>{onchangeinpute(e)}} placeholder='enter Your name' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  </div>
  <div class="mb-3">
    
    <input type="name" name='email' value={Data.email} onChange={(e)=>{onchangeinpute(e)}} placeholder='enter Your email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  </div>
  <div class="mb-3">
  
    <input type="password" name='password' value={Data.password} onChange={(e)=>{onchangeinpute(e)}} placeholder='enter your password' class="form-control" id="exampleInputPassword1"/>
  </div>
  <br/>
  
  
  <div class="d-grid gap-2">
  
  <button class="btn btn-primary" onClick={(e)=>{signUp(e)}} type="button">submit</button>
</div>
</form>
    </div></div>
  )
}

export default Resister
