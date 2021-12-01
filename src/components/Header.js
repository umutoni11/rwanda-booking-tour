import React, { useState } from "react";
import Home from "../views/home";
import "./header.css";
import logo from "../assets/IMAGE/logo11.jpg";
import {useNavigate} from "react-router-dom";
import {Modal,Form,Input,Button} from "antd"
const Header=()=>{
    const [visible,setVisible]=useState(false);
    const onFinish=(values)=>{
        console.log(values)
    }
    const navigate=useNavigate();
    return( 
        <>
        <Modal
        visible={visible}
        width="40%"
        onOk={()=>setVisible(true)}
        onCancel={()=>setVisible(false)}
        >
<h1>Sign In Form</h1>
<Form onFinish={onFinish} onOk={()=>Form.submit}>
    <Form.Item label="Email" name="email" rules={[{required:true}]}>
        <Input type ="email"/>

    </Form.Item>
    

    <Form.Item label="Password" name="password" rules={[{required:true}]}>
        <Input type ="password"/>

    </Form.Item>
    <Button htmlType="submit" onClick={()=>{
        localStorage.setItem("userLogedin",true);
        navigate("/dash/newtour");
    }}>Login</Button>
</Form>

        </Modal>

    <div className="header"> 
    <div className="logo">
        <img src={logo}/>
    </div>
    
        <div className="topnav">
            <a href="Contact">Contact </a>
            <a href="aboutus">About us</a>
            <a href="#"onClick={()=>setVisible(true)}> Sign in</a>
            <a href="Tours">Tours</a>
            <a href="CreateAccount">Create Account</a>
             <a class="active" href="home">Home</a>

        </div>
        
         </div>
         </>
    )
}

export default Header