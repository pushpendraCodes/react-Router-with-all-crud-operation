import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Navbar from "./Navbar";
const Restoraunt = () => {

    let {id} = useParams();
    const[Data ,setData] = useState([])

    const Loaduser = async()=>{
        const res = await axios.get(` http://localhost:3000/restoraunts/${id}`)
        console.log(res)
        setData(res.data)
       
    }


    useEffect(()=>{
        Loaduser()
    },[])
    
  return (
    <div>
    <Navbar/>
    <div className='ccontainer shadow-lg p-3 mb-5 bg-body rounded mt-4'>
    <Link className='btn btn-primary mx-1' to='/Restoraunts'>Back to Restoraunts</Link>
    <br/>
    <h1 className='text-center mt-5'>Restoraunt Details</h1>
    <br/>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">City</th>
   
    </tr>
  </thead>
  <tbody>
  
            <tr >
      <th scope="row">{id}</th>
      <td>{Data.name}</td>
      <td>{Data.email}</td>
      <td>{Data.city}</td>
      <td>
     
      </td>
    </tr>
   
  </tbody>
</table>

    </div>
</div>
  )
}

export default Restoraunt
