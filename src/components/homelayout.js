import React from "react";
import "./Homelayout.css"
import Header from "./Header"
import Footer from "./footer"
import Contact from "../views/contact";
import CreateAccount from "../views/CreateAccount";


const Homelayout = ({ children }) => {
     return (
          <div className="home-container">
               <Header />
               <div style={{minheight:"80vh"}}>
                    {children}
               </div>
               
               <Footer/>

     </div>
     )
}
    export default Homelayout;