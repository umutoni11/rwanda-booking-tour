import React from "react";
import {Routes,Route}from "react-router-dom";
import Home from "../views/home";
import Aboutus from"../views/Aboutus";
import Signin from "../views/Signin";
import CreateAccount from "../views/CreateAccount";
const Index=()=>{
    return(
        <Routes>
            <Route exact path='/home'element={<Home/>}></Route>
        <Route exact path='/Aboutus' element={<Aboutus></Aboutus>}></Route>
        <Route exact path='/signin'element={<Signin></Signin>}></Route>
        <Route exact path='/CreateAccount' element={<CreateAccount></CreateAccount>}></Route>
        </Routes>
        
    )
};
export default Index;