
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
                <h1>BOOKING TOUR.COM</h1>
                <h2>Tel:+250782798849 </h2>
                <h3>Email:info@bookingtour.com</h3>
                <h4>Karongi-Rwanda</h4>
            </div>
            <div className="quick-access">
                <h1> Quick ACCESS</h1>
                <h2> Home </h2>
                <h3> Contact us </h3>
                <h4> Gallery </h4>
                <h5> Terms and conditions </h5>
            </div>
            <div className="line">

                <div className="line1"><InstagramOutlined /></div>
                <div className="line2"><TwitterOutlined /></div> 
                <div className="line3"><FacebookOutlined /></div>
                <div className="line4"><LinkedinOutlined /></div>
            </div>
            

        </div>


    )


}

export default Footer;