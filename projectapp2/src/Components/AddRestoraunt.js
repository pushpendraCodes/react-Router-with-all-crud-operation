import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Navbar from "./Navbar";


const AddRestoraunt = () => {
    let navigate = useNavigate()

    const[Data ,setData] = useState({
        name:'',
        email:'',
        city:''
    })



    const onchangeinpute = async(e)=>{

        setData({...Data ,[e.target.name]:e.target.value})
        console.log(Data)
       
     
     
     }


     const submitData  = async(e)=>{
        e.preventDefault();
        await axios.post(` http://localhost:3000/restoraunts`,Data);
        alert('Data has been added')
        navigate('/Restoraunts')
 
    
    
    
    }


  return (
   <div>
   <Navbar/>
    <div className='ccontainer shadow-lg p-3  bg-body rounded mt-3'>
      <h1 className='text-center mt-2'>Add Restoraunt</h1>
<br/>

      
      <form onSubmit={(e)=>{submitData(e)}} >
  <div className="mb-3">
  
    <input type="name" name='name' value={Data.name} onChange={(e)=>{onchangeinpute(e)}} placeholder='type name' className="form-control" required/>
   
  </div>
  <div className="mb-3">
   
    <input type="email" name='email' value={Data.email} placeholder='type email' onChange={(e)=>{onchangeinpute(e)}} className="form-control" required />
  </div>
  <div className="mb-3">
   
    <input type="text" name='city' value={Data.city} placeholder='type city' onChange={(e)=>{onchangeinpute(e)}} className="form-control" required/>
  </div>
 
  <button type="submit" className="btn btn-primary">Add Restoraunts</button>
</form>
    </div>
    </div>
    
  )
}

export default AddRestoraunt
