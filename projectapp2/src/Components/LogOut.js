import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const LogOut = () => {
   localStorage.clear()
    let Navigation = useNavigate();

    useEffect(()=>{
        Navigation('/login')  
    },[])
  
   

  return (
    <div>
  <Navbar/>
    </div>
  )
}

export default LogOut
