import React from 'react';
import   './App.css'
import { ReactDOM } from 'react';
import { render } from '@testing-library/react';
import Header from './components/Header';
import Home from './components/Home';
import {FiSun} from 'react-icons/fi'
import {MdDarkMode} from 'react-icons/md'
import {useState,useEffect} from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Blog from './components/Blog';
import Img from './Img';
import About from './components/About';
//import $ from 'jquery';




function App(){

   const [mode,setMode]=useState(false)
   const Btn=()=>{
     if (mode===true){
       setMode(false)
   }
   else{
       setMode(true)
   }}

  

  return(
    <BrowserRouter>
          <div className={mode ? 'dark' : 'light'}>
             <span onClick={()=> Btn()}>{mode ? <FiSun></FiSun> :  <MdDarkMode></MdDarkMode>}</span>
             <Header style={mode ? HeaderDark : HeaderLight}></Header>
          
              <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/blog' element={<Blog/>}></Route>
              </Routes>
                  
            </div>
    </BrowserRouter>
      )
 
}
   
 
   
export default App;





const HeaderLight={
   color:'red',
   backgroundColor:'white',
   width:'100%',
   margin:0,
   paddingLeft:'15px',
   borderBottom :'2px solid black',
   display:'flex',
   transition :'0.2s ease-in-out'
   // background-image: conic-gradient(from 40deg, #fff, #000);
}

const HeaderDark={
  color:'white',
  backgroundColor:'black',
  width:'100%',
  margin:0,
  paddingLeft:'15px',
  borderBottom :'2px solid white',
  transition :'0.2s ease-in-out'
 
  
}


