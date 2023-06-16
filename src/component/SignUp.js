import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Typography, Button, Divider } from "antd";
import "./Login.css";
import {
  MailOutlined,
  EyeInvisibleOutlined,
  GoogleOutlined,
  FacebookFilled,
  TwitterOutlined,
  UserOutlined,
  AppleFilled 

} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  //to store value in local storage
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("pass", pass);
    navigate("/");
  };
  return (
     <div className="singup" style={{ color: "white" }}>
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="nav">
  <ul className="navbar-nav">
         <li  className="nav-item" >
           {/* Endpoint to route to Home component */}
           <Link  className="navbar-brand" id='idd'>Home</Link>
         </li>
         <li className="nav-item">
           {/* Endpoint to route to About component */}
           <Link  to={'/'}className="navbar-brand" id='idd'>Login</Link>
         </li>
         <li className="nav-item">
           {/* Endpoint to route to Contact Us component */}
           <Link to={"/SignUp"} className="navbar-brand" id='idd'>SignUP</Link>

         </li>
         <li className="nav-item">
           {/* Endpoint to route to Contact Us component */}
           <Link to={"/Contact"} className="navbar-brand" id='idd'>Contact Us</Link>
           
         </li>
         <li className="nav-item">
           {/* Endpoint to route to Contact Us component */}
           <Link to={"/About "} className="navbar-brand" id='idd'>About Us</Link>
           
         </li>
       </ul> 
  </nav>
      
        <Form className="form" onSubmit={handleSubmit}>
          <UserOutlined className="user" />;
          <Typography.Title className="title">SignUP</Typography.Title>
          <Form.Item label="Name" className="lable"  rules={[{ required: true, message: 'Please input your full name!' }]}></Form.Item>
          <Input
            type="text"
            placeholder="Enter Your Name"
            prefix={<UserOutlined style={{ fontSize: '16px', color: '#08c' }} />}
            className="input"
            allowClear
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Item label="Email" className="lable"  rules={[{ required: true, message: 'Please input your Email!' }]}></Form.Item>
          <Input
            type="Email"
            placeholder="Enter Your Email"
            prefix={<MailOutlined style={{ fontSize: '16px', color: '#08c' }} />}
            className="input"
            allowClear
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Item label="Password" className="lable"  rules={[{ required: true, message: 'Please input your Password!' }]}></Form.Item>
          <Input
            placeholder="Enter Your Password"
            type="password"
            prefix={<EyeInvisibleOutlined style={{ fontSize: '16px', color: '#08c' }}/>}
            className="input"
            allowClear
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <Form.Item label="Confirm Password" className="lable"  rules={[{ required: true, message: 'Please input your Password!' }]}></Form.Item>
          <Input
            placeholder="Enter Your Confirm Password"
            type="password"
            prefix={<EyeInvisibleOutlined style={{ fontSize: '16px', color: '#08c' }}/>}
            className="input"
            allowClear
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <Button
            type="primary"
            className="btn"
            htmlType="submit"
            block
            onClick={handleSubmit}
          >
            SignUP{" "}
          </Button>
          <Divider style={{ borderColor: "black" }}>Or SignUP with</Divider>
          <div className='socialLogin'>
             <a href='https://accounts.google.com/signup/v2/createaccount?flowName=GlifWebSignIn&flowEntry=SignUp'><GoogleOutlined className='socialicon'  style={{color:'orange'}}/></a>
             <a href='https://en-gb.facebook.com/help/188157731232424'><FacebookFilled className='socialicon'  style={{color:'blue'}}/></a>
             <a href='https://twitter.com/i/flow/signup'><TwitterOutlined className='socialicon'  style={{color:'cyan'}}/></a>
             <a href='https://support.apple.com/'><AppleFilled  className='socialicon'  style={{color:'red'}}/></a>
       </div>
        </Form>
      </div>
    
  );
}

export default SignUp;
