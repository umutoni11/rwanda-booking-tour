import React from "react";
import HomeLayout from "../components/homelayout";
import Home from "../views/home";
import"./Aboutus.css";
 import image from "../assets/IMAGE/Nyungwe-Canopy.jpg"
 

const Aboutus=()=>{
    return(  

<HomeLayout>
  <div className="aboutusall">
<div className="aboutus">

<h1>About us</h1>

<div className="aboutus-cont">
    <div className="aboutus-div-image"></div>

<div className="aboutus-words">
    <h1>ABOUT TOURS</h1>
    <p>
Rwanda booking Tours was introduced in the year 2020.<br/>
 And at present, wehave become one of the most popular names in the Rwandan tourism industry.<br/>
  Since the inception,<br/>
   this company has made its name as the travel company signifying reliability and quality,<br/>
    a benchmark for the people, 
    who like to travel incomplete assistance and also want to rely on discreet and constant assistance.</p>
</div>
</div>
<div>
    <div className="aboutus-details">
    <div className="aboutus-mission">
        <div className="missionimage"></div>
       <h1>OUR MISSION</h1>
       <p>It is our vision to be one of the most popular travel agencies in Rwanda, 
           offering services to every sector of the individuals and business communities.
 And it is also our vision to use the experience of the highly professional staff members of our company to deal with the requirements of holistic traveling for both leisure travelers and corporates.</p>
       
       
        </div>
    <div className="aboutus-values">
        <div className="valuesimage"></div>
        <h1> OUR VALUES</h1>
        <p>We work with the mission to be passionate and driven about servicing the travel related requirements of the individuals ,
            and companies through the integrity,commitment and dedication of our competent business partners and staff members. 
            To increase our reputation, we always attempt to deliver in the best-in-class services while forming a paradigm shift relating to travel internationally and locally</p>
      
        </div>
    <div className="aboutus-vision">
        <div className="visionimage"></div>
      <h1>OUR VISION</h1>  
      <p>Offering services through transparency and honesty in every dealing with the clients and with the business associates</p>
        </div>
    </div>
</div>
</div>

</div>










</HomeLayout>

       
    )

}
export default Aboutus