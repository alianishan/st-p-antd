import React from 'react'
import { Link } from "react-router-dom";
import {HomeOutlined} from '@ant-design/icons'
import './Login.css';

function AboutUs() {



  
  return (
    <div  className='about'>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="nav">
  <ul className="navbar-nav">
         <li  className="nav-item" >
           {/* Endpoint to route to Home component */}
           <Link  className="navbar-brand" id='idd'>Home</Link>
         </li>
         <li className="nav-item">
           {/* Endpoint to route to About component */}
           <Link  to={'/'}className="navbar-brand" id='idd'>Login</Link>
         </li>
         <li className="nav-item">
           {/* Endpoint to route to Contact Us component */}
           <Link to={"/SignUp"} className="navbar-brand" id='idd'>SignUP</Link>

         </li>
         <li className="nav-item">
           {/* Endpoint to route to Contact Us component */}
           <Link to={"/Contact"} className="navbar-brand" id='idd'>Contact Us</Link>
           
         </li>
         <li className="nav-item">
           {/* Endpoint to route to Contact Us component */}
           <Link to={"/About "} className="navbar-brand" id='idd'>About Us</Link>
           
         </li>
       </ul> 
       
  </nav>

  




  
    </div>


 

 
 
    
    
   
  )
}

export default AboutUs
