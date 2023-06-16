import React,{useState} from 'react'
import {Form, Input,Typography,Button,Table} from 'antd';
import './Login.css';
import { MailOutlined,UserOutlined,HomeFilled,PhoneOutlined,DeleteFilled,EditFilled    } from '@ant-design/icons';


function Home() {

 


  
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      Email:'alianishanscs@outlook.com',
      address: '10 Downing Street',
      Number: 3245454,
      Delete:<DeleteFilled style={{ fontSize: '20px', color: 'red' }}/>,
      Edite:<EditFilled style={{ fontSize: '20px', color: 'green' }}/>
    },
    {
      key: '2',
      name: 'Mike',
      Email:'alianishanscs@outlook.com',
      address: '10 Downing Street',
      Number: 3245454,
      Delete:<DeleteFilled  style={{ fontSize: '20px', color: 'red' }}/>,
      Edite:<EditFilled style={{ fontSize: '20px', color: 'green' }}/>
    },
    {
      key: '3',
      name: 'John',
      Email:'alianishanscs@outlook.com',
      Number: 4245435454,
      address: '10 Downing Street',
      Delete:<DeleteFilled style={{ fontSize: '20px', color: 'red' }} />,
      Edite:<EditFilled style={{ fontSize: '20px', color: 'green' }}/>
    },
    {
      key: '4',
      name: 'John',
      Email:'alianishanscs@outlook.com',
      Number: 4245435454,
      address: '10 Downing Street',
      Delete:<DeleteFilled style={{ fontSize: '20px', color: 'red' }}/>,
      Edite:<EditFilled style={{ fontSize: '20px', color: 'green' }}/>
    },
  ];
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'Email',
      key: 'Email',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Number',
      dataIndex: 'Number',
      key: 'Number',
    },
    {
      title: 'Delete',
      dataIndex: 'Delete',
      key: 'Delete',
    },
    {
      title:'Edite',
      dataIndex: 'Edite',
      key: 'Edite',
    },
  ];
  const [data, setData] = useState(dataSource);
  const[name,setName] = useState('')
  const[number,setNumber] = useState('')
  const[email,setEmail] = useState('')
  const[address,setAddress] = useState('')
  const handleSubmit=(event)=>{
  
    event.preventDefault();
    
                   const val = {
                             name,
                             email,
                             
                             number,
                             address,

                                };
                add(val);
                              console.log(val)


setName('');
setEmail('');
setNumber('');
setAddress('');
};
const add = val => {
  setData([...dataSource, val]);
  console.log([...dataSource, val]);
};
  return (
    <div className='Home'>
    <div className='d'>
      <Form className='form1'>
      
    <Typography.Title className='title'>Registeration Form</Typography.Title>
    <Form.Item label='Name' className='lable'  rules={[{ required: true, message: 'Please input your full name!' }]}></Form.Item>
       <Input  type='text' placeholder='Enter Your Name' prefix={<UserOutlined style={{ fontSize: '16px', color: '#08c' }} />} className='input' allowClear   value={name} onChange={(e)=>setName(e.target.value)}/>
       <Form.Item label='Address' className='lable' rules={[{ required: true, message: 'Please input your Address!' }]} ></Form.Item>
       <Input  type='text' placeholder='Enter Your Address' prefix={<HomeFilled  style={{ fontSize: '16px', color: '#08c' }}/>} className='input' allowClear   value={address} onChange={(e)=>setAddress(e.target.value)}/>
     <Form.Item label='Email' className='lable' rules={[{ required: true, message: 'Please input your Email!' }]} ></Form.Item>
       <Input  type='Email' placeholder='Enter Your Email' prefix={<MailOutlined style={{ fontSize: '16px', color: '#08c' }} />} className='input' allowClear  value={email} onChange={(e)=>setEmail(e.target.value)}/>
       <Form.Item label='Phone Number' className='lable'  rules={[{ required: true, message: 'Please input your phone Number!' }]}></Form.Item>
        <Input  type='Number' placeholder='Enter Your Number' prefix={<PhoneOutlined  style={{ fontSize: '16px', color: '#08c' }}/>} className='input' allowClear  value={number} onChange={(e)=>setNumber(e.target.value)}/> 
       
     
    
       <Button type="primary" className='btn' htmlType='submit' block onClick={handleSubmit} >Submit </Button>
       
   
      
    </Form>
  
  
<Table className='table' dataSource={dataSource} columns={columns} />;</div>
    </div>
  )
}

export default Home
