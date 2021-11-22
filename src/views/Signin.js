import React from "react";
import HomeLayout from "../components/homelayout";
// import Home from "..views/home";
// import "./Homelayout.css"
const Signin=()=>{

    return(
        <HomeLayout>
        <div className="Signin-form">
 <h3>Sign in your Account</h3>
<label for="input"> Email:</label>

<input type="email"/><br/><br/>
<label for="input">Password:</label>
<input type="password"/><br></br>

<input type="button" value="submit"></input> 
</div>
</HomeLayout>

        
    )
}
export default Signin;