import React,{useState} from 'react'
import {Form, Input,Typography,Button,Divider, message} from 'antd';
import './Login.css';
import {MailOutlined,AppleFilled,EyeInvisibleOutlined,GoogleOutlined,FacebookFilled,TwitterOutlined,UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";


function Login() {




  const navigate = useNavigate();
 
 const[email,setEmail] = useState('')
 
 const[pass,setPass] = useState('')
 const[showAlert, setShowAlert]= useState(false)
 //to store value in local storage
const handleLogin=(e)=>{
        e.preventDefault();
       
         const email1= localStorage.getItem('email');
        
        const pwd= localStorage.getItem('pass');
         if( email === email1 && pass === pwd){
          message.success('Login successfull!')
          setTimeout(()=>{
            navigate("/Home")

          },2000)
          
         }
         else{
          
            message.error('You Enter invalid')

          

          

         }
        
} 

  return (
    <div className='Login' style={{color:"white"}}>
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
   
    
     <Form className='form' onSubmit={handleLogin}>
     <UserOutlined className='user' />;
     <Typography.Title className='title'>Login</Typography.Title>
      <Form.Item label='Email' className='lable'  ></Form.Item>
        <Input  type='Email' placeholder='Enter Your Email' prefix={<MailOutlined style={{ fontSize: '16px', color: '#08c' }}/>} className='input' allowClear  value={email} onChange={(e)=>setEmail(e.target.value)}/>
      
      <Form.Item label='Password' className='lable'  ></Form.Item>
        <Input placeholder='Enter Your Password' type="password" prefix={<EyeInvisibleOutlined style={{ fontSize: '16px', color: '#08c' }} />} className='input' allowClear value={pass} onChange={(e)=>setPass(e.target.value)}/>
        <Button type="primary" className='btn' htmlType='submit' block onClick={handleLogin} >Login </Button>
        <Button type="primary" className='btn' block > <Link to="/SignUp" >Creat Acount</Link> </Button>
       <Divider style={{borderColor:"black"}}>Or Login with</Divider>
       <div className='socialLogin'>
       <a href='https://docs.google.com/'><GoogleOutlined className='socialicon'  style={{color:'red'}}/></a>
       <a href='https://www.facebook.com/'><FacebookFilled className='socialicon'  style={{color:'blue'}}/></a>
       <a href='https://twitter.com/'><TwitterOutlined className='socialicon'  style={{color:'cyan'}}/></a>
       <a href='https://www.icloud.com/'><AppleFilled  className='socialicon'  style={{color:'red'}}/></a>
       </div>
     </Form>
    </div>
  )
}

export default Login
