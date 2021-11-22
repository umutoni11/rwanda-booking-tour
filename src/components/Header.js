import React from "react";
import Home from "../views/home";
import "./header.css";
import logo from "../assets/IMAGE/logo11.jpg"

const Header=()=>{
    return( 
    <div className="header"> 
    <div className="logo">
        <img src={logo}/>
    </div>
    
        <div className="topnav">
            <a href="Contactus">Contact us</a>
            <a href="aboutus">About us</a>
            <a href="signin"> Sign in</a>
            <a href="CreateAccount">Create Account</a>
             <a class="active" href="home">Home</a>

        </div>
        
         </div>
    )
}

export default Header