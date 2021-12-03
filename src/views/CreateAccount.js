import React from "react";
 import "./Home.css"
import HomeLayout from "../components/homelayout"





const CreateAccount=()=>{
    (
        <HomeLayout>
        <div className="Signup-form">
            <h4>Signup</h4>
            <label for="input"> Names:</label>
<input><br></br></input>
<label for="input">Email:</label>
<input><br></br></input>
<label for="input">Phone</label>
<input type="number"><br></br></input>
<label for="input">Birthdate</label>
<input type="date"><br></br></input>
<label for="Password"><br></br></label>
<input type="password"></input><br></br>
<input type="button" value="submit"></input>


        </div>
        </HomeLayout>



    )
}
export default CreateAccount