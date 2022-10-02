import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link, useNavigate} from "react-router-dom"
import Navbar from "./Navbar";

const Restoraunts = () => {
    let navigate = useNavigate();

    const [Data ,setData]=useState([])
    const loaduser = async()=>{
        const results  = await axios.get("  http://localhost:3000/restoraunts");
        // console.log(results)
        setData(results.data)
    }

useEffect(()=>{
    loaduser()
},[])

const DeleteResto = async(id)=>{
    await axios.delete(`  http://localhost:3000/restoraunts/${id}`);
    loaduser();
    navigate('/Restoraunts')

}

  return (
    <div>
    <Navbar/>
    <div className='container shadow-lg p-3 mb-5 bg-body rounded mt-4'>
      <h1 className='text-center mt-5'>Restoraunts</h1>
      <div className='table-responsive'>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">City</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
     

     Data.map((item,i)=>{
        return(

            <tr key={i}>
      <th scope="row">{i+1}</th>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.city}</td>
      <td>
      <Link className ="btn btn-primary mx-1"  to={`/Restoraunt/${item.id}`}><i class="fa-solid fa-eye"></i></Link>
      <Link className ="btn btn-outline btn-warning mx-1" to={`/Edit/${item.id}`}><i class="fa-solid fa-pen-to-square"></i></Link>
      <Link className ="btn btn-danger mx-1" onClick={()=>{DeleteResto(item.id)}}><i class="fa-solid fa-trash"></i></Link>
     
      </td>
    </tr>
        )
     })
        
    }
  </tbody>
</table>
</div>
    </div></div>
  )
}

export default Restoraunts
