import React from 'react'
import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.min.js";


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Navbar = () => {
  return (
    <div >
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
 <Link> <img className='logo' src="./images/logo.png" alt="" /></Link> &nbsp;
    <Link style={{color: "#ab82ec"}} className="navbar-brand " to="#">Food Adda</Link>

   
    
  
    {/* <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button> */}
    <div className="collapse navbar-collapse   " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0  ">
      <li className="nav-item">
          <Link className="nav-link text-brown text-white  " aria-current="page" to="/">Home </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-brown  text-white " aria-current="page" to="/Restoraunts">Restoraunts </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  text-white " aria-current="page" to="/About"> About Us <i class="fa-regular fa-user"></i></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  text-white " aria-current="page" to="/Contact">Contact Us <i class="fa-solid fa-envelope"></i></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  text-white " aria-current="page" to="/Search">Search <i class="fa-solid fa-search"></i></Link>
        </li>
       
        </ul>
      
      </div>
      
     
    {
      localStorage.getItem('login')?
       <Link className="btn btn-primary btn-sm mx-1 " aria-current="page" to="/logout">LogOut <i class="fa-solid fa-user"></i></Link>
       :
       <Link className="btn btn-primary btn-sm mx-1 " aria-current="page" to="/login">Login <i class="fa-solid fa-user"></i></Link>
    }
   
    {/* <Link className="btn btn-outline-warning mx-1 " aria-current="page" to="/login">Login <i class="fa-solid fa-user"></i></Link> */}
    <Link className="btn btn-primary btn-sm mx-2" aria-current="page" to="/Resistration">SignUp <i class="fa-solid fa-user"></i> <i class="fa-solid fa-plus"></i></Link>



    
    <Link  className="btn  btn-sm btn-outline-warning " aria-current="page" to="/Add">Add Restoraunt <i class="fa-solid fa-plus"></i></Link>


    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
   
  </div>



</nav>


      
    </div>
  )
}

export default Navbar
