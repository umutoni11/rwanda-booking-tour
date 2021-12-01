import React,{useState} from "react";
import image from"../assets/IMAGE/image8.jpg";
import { Drawer } from "antd";
import "antd/dist/antd.css"
import SingleTour from "./singletour"

const TourCard =({data})=>{
  const [drawerVisible,setDrawerVisible]=useState(false)

const handleclickDrawerVisible =()=>{

setDrawerVisible(true);

}
const closerDrawerVisible =()=>{

  setDrawerVisible(false);
}

return(
  <>
  

  <Drawer title= "Basic Drawer" placement="left" visible={drawerVisible} width={720} onClose={()=>closerDrawerVisible()}>
    <SingleTour data={data}></SingleTour>
    </Drawer >;

 <div className="Tourcard-div">
   
   <div className="Tourcard-1">
      
<img src={data?.images[0]}/> 

<p>
<div className="Tourcard-2" ><span>{data?.title}</span></div>
<div className="Tourcard-3"><br/>{data?.description}<br /></div><br/>
<div className="Tourcard-4"><label>DateScheduled:</label>
{data?.DateScheduled} <br/></div>
<div className="Tourcard-5"><label>DueDate:</label>
{data?.DueDate} <br /></div>
<div className="Tourcard-6" onClick={()=>handleclickDrawerVisible()}><a href="#">Read more</a></div>



</p>

</div>  
 </div> 
 </>



)

}
export default TourCard;