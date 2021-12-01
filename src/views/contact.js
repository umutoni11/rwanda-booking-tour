import React from "react";
import "../components/Homelayout.css"
import Homelayout from "../components/homelayout";
import Header from "../components/Header";
// import "./Homelayout.css"
// import "./contact.css"
import { InstagramOutlined } from "@ant-design/icons";
import { TwitterOutlined } from "@ant-design/icons"
import { FacebookOutlined } from "@ant-design/icons"




const Contact=()=>{
    return(

        <Homelayout>

<div className="contact-div">
    
<h1 >Send us a message</h1>
    <div className="contact-div-1">
    <h2>Names</h2>
    <input placeholder="names"></input>
    <h3>Email</h3>
    <input placeholder=""></input>
    <h4>Phone</h4>
    <input placeholder=""></input>
    <h5>Your Message</h5>
    <input placeholder="leave a comment here"></input>
    <div className="button">
       <a href="#"> <p>Send</p>  </a>
    </div>
    

    </div>
<div className="contact-divid">
<h1>Connect with us</h1>
<div className="icons">
    <a href="#"> <div className="line2"><TwitterOutlined /></div> </a>           
    <a href="#"><div className="line3"><FacebookOutlined /></div></a>
    <a href="#"> <div className="line4"><InstagramOutlined /></div></a>



</div>
</div>
</div>
</Homelayout>










    )
}
export default Contact;