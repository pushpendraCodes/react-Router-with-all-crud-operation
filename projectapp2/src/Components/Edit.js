import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Navbar from "./Navbar";

const Edit = () => {
    let {id} = useParams();
    let navigate = useNavigate();

    const[Data ,setData] = useState({
        name:'',
        email:'',
        city:''
    })

    useEffect(()=>{
        Loaduser();

    },[])

const Loaduser = async()=>{
    const res = await axios.get(` http://localhost:3000/restoraunts/${id}`)
    console.log(res)
    setData(res.data)
   
}

const onchangeinpute = async(e)=>{

   setData({...Data ,[e.target.name]:e.target.value})
   console.log(Data)
  


}

const submitData  = async(e)=>{
    e.preventDefault();
    await axios.put(` http://localhost:3000/restoraunts/${id}`, Data);
    alert('Data has been updated')
navigate('/Restoraunts')



}




  return (
    <div>
    <Navbar/>
    <div className='container shadow-lg p-3 mb-5 bg-body rounded mt-4'>
      <form onSubmit={(e)=>{submitData(e)}} >
  <div className="mb-3">
  
    <input type="name" name='name' value={Data.name} onChange={(e)=>{onchangeinpute(e)}} placeholder='type name' className="form-control" />
   
  </div>
  <div className="mb-3">
   
    <input type="email" name='email' value={Data.email} placeholder='type email' onChange={(e)=>{onchangeinpute(e)}} className="form-control" />
  </div>
  <div className="mb-3">
   
    <input type="text" name='city' value={Data.city} placeholder='type city' onChange={(e)=>{onchangeinpute(e)}} className="form-control" />
  </div>
 
  <button type="submit" className="btn btn-primary">Update</button>
</form>
    </div></div>
  )
}

export default Edit
