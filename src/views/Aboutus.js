import React from "react";
import HomeLayout from "../components/homelayout";
import Home from "../views/home";
import"./Aboutus.css";


const Aboutus=()=>{
    return(  

<HomeLayout>
    <div className="aboutus-separate">
<div className="aboutus-div">
<h1> Our Main Purpose</h1>

<p>
Our goal is to manage 30 parks by 2030,<br></br>
the geographic spread of protected areas ,<br></br>
and representation of different ecoregions makes this the largest and <br></br>
most ecologically diverse portfolio of parks under management by any one NGO on the continent.<br></br>
</p></div>




{/* <div className="aboutus-line"></div> */}
<div className="aboutus-key">
<h2> Saving Wildlife</h2><br></br>
<p1>
We are facing a conservation crisis in Africa. <br></br>
Some of the planet's most spectacular species are being lost,<br></br> 
but we are working to protect them.<br></br>
We have the largest counter-poaching force in all of Africa for any one NGO. <br></br>
Our 1000 rangers provide safety for both wildlife and people<br></br>
</p1>
</div>

</div>
<div className="about-background"></div>
</HomeLayout>

       
    )

}
export default Aboutus