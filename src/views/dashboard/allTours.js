import React from "react"
import { Space, Table } from 'antd';
import Allavailabletours from "../../assets/constant/tours.json"
import { ReactDOM } from "react";
import { Layout,Menu } from "antd";
import "antd/dist/antd.css";
 import DetailTours from "../../assets/constant/details.json"
 import {EditOutlined,DeleteOutlined}   from '@ant-design/icons'


 const column= [
  
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
       
      },
     
      {
        title: 'Datescheduled',
        dataIndex: "DateScheduled",
        key: 'DateScheduled',
       
      },
      {
        title: 'Seats',
        dataIndex: "seats",
        key: 'seats',

       
      },
      {
        title: 'price',
        dataIndex: "price",
        key: 'price',
       
      },

      {
        title: 'Actions',
        dataIndex: "Action",
        key: 'Action',
       
      
      
        render:()=>(
            <Space size="middle">
  
  
               <a> <DeleteOutlined /></a>
               <a> <EditOutlined /> </a>
               
            </Space>
      
  
        )
      }
    ];
const columns= [

    {
        title: 'First Name',
        dataIndex: 'First Name',
        key: 'First Name',
       
      },
     
      {
        title: 'Second Name',
        dataIndex: "Second Name",
        key: 'Second Name',
       
      },
      {
        title: 'Email',
        dataIndex: "Email",
        key: 'Email',

       
      },
      {
        title: 'Phone',
        dataIndex: "Phone",
        key: 'Phone',
       
      },

      {
        title: 'Adress',
        dataIndex: "Adress",
        key: 'Adress',

      },
      {

        title: 'Actions',
        dataIndex: "Action",
        key: 'Action',
       

      render:()=>(
          <Space size="middle">


             <a> <DeleteOutlined /></a>
             <a> <EditOutlined /> </a>
             
          </Space>


      )
    }
    
    ]
  
     const AllTours =()=>{
    
       return(

  <><Table columns={column} dataSource={Allavailabletours} />       
<Table columns={columns} dataSource={DetailTours}/></>

   )

}


















export default AllTours;