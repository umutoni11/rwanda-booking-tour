
import React, { Component } from "react";
import "./footer.css";
import { InstagramOutlined } from "@ant-design/icons";
import { TwitterOutlined } from "@ant-design/icons"
import { FacebookOutlined } from "@ant-design/icons"
import { LinkedinOutlined } from "@ant-design/icons"
import logo from "../assets/IMAGE/logo11.jpg"
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
// import React ,{Component} from "react"


const Footer = () => {

    return (
        <div className="footer-container">
            <div className="booking-tour">
            <a>    <h1>BOOKING TOUR.COM</h1></a>
            <a>  <h2>Tel:+250782798849 </h2></a>
            <a>    <h3>Email:info@bookingtour.com</h3></a>
            <a>   <h4>Karongi-Rwanda</h4></a>
            </div>
            <div className="quick-access">
               <a> <h1> Quick ACCESS</h1></a>
               <a href="home">  <h2> Home </h2></a>
               <a href="contact">   <h3> Contact us </h3></a>
               <a href="Tours"  >    <h4> Gallery </h4></a>
                <h5> Terms and conditions </h5>
            </div>
            <div className="line">

           <a><div className="line1"><InstagramOutlined /></div></a> 
           <a>  <div className="line2"><TwitterOutlined /></div> </a>
           <a><div className="line3"><FacebookOutlined /></div></a>
           <a><div className="line4"><LinkedinOutlined /></div></a>
            </div>
            

        </div>


    )


}

export default Footer;