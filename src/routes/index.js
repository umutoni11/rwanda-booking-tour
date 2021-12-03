import React from "react";
import {Routes,Route,useLocation}from "react-router-dom";
import Home from "../views/home";
import Aboutus from"../views/Aboutus";
import Signin from "../views/Signin";
import CreateAccount from "../views/CreateAccount";
import Contact from "../views/contact";
import Tours from "../views/Tours"
import SingleTour from "../components/singletour"
import NewTourView from "../views/dashboard/Newtour";
import DashLayout from "../components/dashboardLayout";
import AllTours from "../views/dashboard/allTours"

const isUserLogedIn=localStorage.getItem("userLogedin")

const Index=()=>{
    const currentUrl=useLocation().pathname;
    return(
        <>
        <Routes>
            <Route exact path='/home'element={<Home/>}></Route>
        <Route exact path='/Aboutus' element={<Aboutus></Aboutus>}></Route>
        <Route exact path='/signin'element={<Signin></Signin>}></Route>
        <Route exact path='/CreateAccount' element={<CreateAccount></CreateAccount>}></Route>
        <Route exact path='/contact'element={<Contact></Contact>}></Route>
        <Route exact path='/Tours' element={<Tours></Tours>}></Route>
        <Route  exact path='/singletour' element={<SingleTour></SingleTour>} ></Route>
        </Routes>
       
{isUserLogedIn && currentUrl.includes("/dash")?(
         <DashLayout>
         <Routes>
         <Route  exact path='/dash/newtour' element={<NewTourView></NewTourView>} ></Route>
             <Route  exact path='/dash/allTours' element={<AllTours></AllTours>} ></Route>  
            
         </Routes>
         </DashLayout>):(<></>)
}
    </>    
    )
};
export default Index;