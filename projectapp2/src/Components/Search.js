import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Navbar from "./Navbar";


const Search = () => {
    const[search ,setsearch]  = useState(null)
    const[noData ,setnoData]  = useState(false)

    const DeleteResto = async(id)=>{
      await axios.delete(`  http://localhost:3000/restoraunts/${id}`);
      // loaduser();
      
      // navigate('/')
  
  }


    const input = async(key)=>{
        console.log(key)
        const res = await axios.get(` http://localhost:3000/restoraunts?q=${key}`)
        console.log(res)
if(res.data.length>0){
   setsearch(res.data)
   setnoData(false)
}else{
  setnoData(true)
  setsearch(null)
}
   
        
    }


    console.log(search)

  return (
   
    <div>
     <Navbar/>
   
    <div className='container text-center mt-5'>
      <h1>Search Restoraunts</h1>
      <br/>
      <form class="d-flex " role="search">
        <input class="form-control me-2 " type="search" placeholder="Search" aria-label="Search" onChange={(e)=>{input(e.target.value)}}/>
      
      </form>
    <br/>

     {
   search?
  <div>
    {search.map((item)=>{
      return(

   
        <div>
      
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
     

     search.map((item,i)=>{
        return(

            <tr key={i}>
      <th scope="row">{item.id}</th>
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
   
  
      )
    })}
  </div>:
  ''
     }
     {
      noData?<h4>no data found</h4>:null
     }


      </div>

</div>

  
  )
}

export default Search
