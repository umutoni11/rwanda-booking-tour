import React from "react"
import { Divider, Typography } from "antd";
// import Paragraph from "antd/lib/skeleton/Paragraph";
//  import Title from "antd/lib/skeleton/Title"

const SingleTour=({data})=>{

return(

<div className="singletour-container">

<div className="singletour-container-title">
<p1>{data?.title}
     {/* <label></label> */}
 
 </p1>
 </div>
 <img src={data?.images[0]} width="50%" height="250vh"/> 
 
  <p1>{data?.description}</p1>
<p>
<label>DateScheduled:</label>
{data?.DateScheduled}
</p>
 <p><label>DueDate:</label>
 {data?.DueDate}
 </p> 
 <br/>
 
<div className="garelly-container" >
    <h1 style={{color:"black",fontWeight:"bolder"}}>GARELLY</h1>
    <div style={{width:"100%",display:"flex",flexWrap:"wrap",marginLeft:"50px"}}>

    <div style={{width:"25%",margin:10}}>
        <img src={data?.images[1]} style={{width:"100%",borderRadius:"20px",height:"50%"}} />
    </div>
    <div style={{width:"25%",margin:5}}>
    <img src={data?.images[2]} style={{width:"100%",borderRadius:"20px",height:"50%"}} />
    </div>

    <div style={{width:"25%",margin:5}}>
    <img src={data?.images[3]} style={{width:"100%",borderRadius:"20px",height:"50%"}} />
    </div>

    <div style={{width:"25%",margin:5}}>
    <img src={data?.images[4]} style={{width:"100%",borderRadius:"20px",height:"50%"}} />
    </div>

    <div style={{width:"25%",margin:5}}>
    <img src={data?.images[5]} style={{width:"100%",borderRadius:"20px",height:"50%"}} />
    </div>

    <div style={{width:"25%",margin:5}}>
    <img src={data?.images[6]} style={{width:"100%",borderRadius:"20px",height:"50%"}} />
    </div>
    <div style={{width:"25%",margin:5}}>
    <img src={data?.images[6]} style={{width:"100%",borderRadius:"20px",height:"50%"}} />
    </div>

    <div style={{width:"25%",margin:5}}>
    <img src={data?.images[7]} style={{width:"100%",borderRadius:"20px",height:"50%"}} />
    </div>
    <div style={{width:"25%",margin:5}}>
    <img src={data?.images[7]} style={{width:"100%",borderRadius:"20px",height:"50%"}} />
    </div>
    <div style={{width:"25%",margin:5}}>
    <img src={data?.images[7]} style={{width:"100%",borderRadius:"20px",height:"50%"}} />
    </div>
    </div>


</div>






</div>








)







}
export default SingleTour;