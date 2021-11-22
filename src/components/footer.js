
import React from "react";
import "./footer.css";
import  {InstagramOutlined} from "@ant-design/icons";
import {TwitterOutlined} from "@ant-design/icons"
import {FacebookOutlined } from "@ant-design/icons"
import {LinkedinOutlined } from  "@ant-design/icons"
import logo from "../assets/IMAGE/logo11.jpg"


const Footer =()=>{
    return(
        <div className="footer-container">
            <div className="About-footer">
                <h1>About</h1>
                <h2>Our story</h2>
                <h3>Our people</h3>
                <h4>Our partners</h4>
                <h5>Financials Annual reports</h5>
                <h6>FAQS</h6>
                <h7>Contactus</h7>

            </div>
            <div className="parks">
                <h1>Akagera National Park</h1>
                <h2>Nyungwe National park</h2>
                <h3>Gishwati-Mukura national park</h3>
                <h4>Volcanoes National park</h4>
               
            </div>
            <div className="work-p"> 
            <h1>Saving wild life</h1>
            <h2>Park protection</h2>
            <h3> Community development</h3>
            <h4> Tourism enterprise</h4>

            </div>
            <div className="line">
                 
        <p1><InstagramOutlined /></p1>
        <p2><TwitterOutlined /></p2>
        <p3><FacebookOutlined /></p3>
        <p4><LinkedinOutlined /></p4>
        </div>
        <img src={logo}/>
        <div className="backword">
<p1>@2021 Rwandan parks</p1>
<p3>privacy policy</p3>
<p4>Terms of use</p4>
        </div>

            </div>


)


}
export default Footer;