import Restoraunts from "./Components/Restoraunts";
import Contact from "./Components/Contact";
import About from "./Components/About";
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route} from "react-router-dom";
import './App.css';


import Edit from "./Components/Edit";
import AddRestoraunt from "./Components/AddRestoraunt";
import Restoraunt from "./Components/Restoraunt";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Search from "./Components/Search";
import Login from "./Components/Login";
import Resister from "./Components/Resister";
import LogOut from "./Components/LogOut";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import Home from "./Components/Home";
function App() {


 
  return (
    <div   >
   
<Routes>


<Route path="/About" element = {<About/>} />
<Route path="/" element = {<Home/>} />

<Route path="/Edit/:id" element = {<Edit/>} />

<Route path="/Restoraunt/:id" element = {<Restoraunt/>} />

<Route path="/login" element = {<Login/>} />
<Route path="/Resistration" element = {<Resister/>} />
<Route path="/logout" element = {<LogOut/>} />
<Route path="/Contact" element = {<Contact/>} />

{/* ---protected rouitng----- */}
<Route  element = {<ProtectedRoutes/>} >


<Route path="/Restoraunts" element = {<Restoraunts/>} />

<Route path="/Search" element = {<Search/>} />
<Route path="/Add" element = {<AddRestoraunt/>} />

</Route>


</Routes>
    </div>
  );
}

export default App;
