import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoutes() {
  // const isAuthenticated = localStorage.getItem("isAuthenticated");
  // console.log("this", isAuthenticated);

  return (
    localStorage.getItem('login')?<Outlet/>:<Navigate to="/login"/>
   
  )
}

export default ProtectedRoutes;