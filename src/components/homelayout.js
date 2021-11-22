import React from "react";
import "./Homelayout.css"
import Header from "./Header"
import Footer from "./footer"
import Contact from "../views/contact";
const Homelayout = ({ children }) => {
     return (
          <div className="home-container">
               <Header />
               {/* <div style={{height:"120%"}}> */}
                    {children}
               {/* </div> */}
               
               <Footer/>

     </div>
     )
}
    export default Homelayout;