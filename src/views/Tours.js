import React,{useState} from "react";
import SingleTour from "../components/singletour";
import Homelayout from "../components/homelayout";
import Tourcard from "../components/Tourcard";
import allToursData from "../assets/constant/tours.json";


const Tours = ()=>{

    const[drawerVisible, setDrawerVisible]=useState(false);





return(
  
    
<Homelayout>

<div className="Tours-div">

    {
        allToursData.map((data)=>( 
        <Tourcard data={data}/>))
    }


</div>



</Homelayout>



)







}
export default Tours;