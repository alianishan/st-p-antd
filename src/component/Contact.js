import React,{useState} from 'react'
import {Form, Input,Typography,Button} from 'antd';
import './Login.css';
import { Link } from "react-router-dom";
import {MailOutlined,UserOutlined,MessageOutlined } from '@ant-design/icons';
const { TextArea } = Input;

function Contact() {
  const[name,setName] = useState('')
  const[email,setEmail] = useState('')
  return (
   
     <div className='contact' style={{color:"white"}}>
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
    <Form className='form' >
    <UserOutlined className='user' />;
    <Typography.Title className='title'>Contact Us</Typography.Title>
    <Form.Item label='Name' className='lable'  rules={[{ required: true, message: 'Please input your full name!' }]} ></Form.Item>
       <Input  type='text' placeholder='Enter Your Name' prefix={<UserOutlined style={{ fontSize: '16px', color: '#08c' }}/>} className='input' allowClear   value={name} onChange={(e)=>setName(e.target.value)}/>
     <Form.Item label='Email' className='lable'  rules={[{ required: true, message: 'Please input your Email!' }]} ></Form.Item>
       <Input  type='Email' placeholder='Enter Your Email' prefix={<MailOutlined style={{ fontSize: '16px', color: '#08c' }}/>} className='input' allowClear  value={email} onChange={(e)=>setEmail(e.target.value)}/>
       <Form.Item label='Message' className='lable'  rules={[{ required: true, message: 'Please input your message!' }]}></Form.Item>{<MessageOutlined style={{ fontSize: '16px', color: '#08c' }} />}
       <TextArea rows={4}  maxLength={6} className='input' />
     
       <a href=" mailto:alianishanscs@outlook.com"> <Button type="primary"  className='btn' htmlType='submit' block  >Send Message </Button></a>
       
    
    </Form>
   </div>
    
  )
}

export default Contact
