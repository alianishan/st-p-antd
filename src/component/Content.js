import React from 'react'
import {Routes, Route,BrowserRouter} from 'react-router-dom'
import AboutUs from './AboutUs';
import Contact from './Contact';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp'
import 'antd/dist/reset.css';
import {HomeOutlined} from '@ant-design/icons'
import { Menu} from 'antd'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";


function Content() {
  return (
    <div className='appcontent'>
      <BrowserRouter>
     <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/signUp' element={<SignUp/>}></Route>
        <Route path='/About' element={<AboutUs />}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
     </Routes>
     </BrowserRouter>
   
    </div>
  )
}

export default Content
