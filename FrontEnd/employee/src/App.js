
import React, { useState } from 'react';
import { Routes, Route, Outlet, Router } from 'react-router-dom';
import './App.css';
import { AllocateLaptop } from './components/AllocateLaptop';
import Employee from './components/Employee';
import LaptopList  from './components/LaptopList';
import { Login } from './components/Login';
import Menu from './components/Menu';
import AddLaptop from './components/AddLaptop'
import { ReturnLaptop } from './components/ReturnLaptop';
import UpdateLaptop from './components/UpdateLaptop'
import About from './components/About';


function App() {
  const MenuLayout = () => (
    <>
      <Menu />
      <Outlet />
    </>
  );


  
  return (
    <div className="App">
      {
       <Routes>
        <Route element={<MenuLayout/>}>
          <Route path='laptopList' element={<LaptopList/>} />

          <Route path='addlaptop' element={<AddLaptop/>} />

          <Route path='returnlaptop' element={<ReturnLaptop/>} />

          <Route path='allocatelaptop' element={<AllocateLaptop/>} />
          <Route path = 'updateLaptop' element= {<UpdateLaptop/>}/>
          <Route path='about' element={<About/>}/>
        </Route>
        <Route path='register' element={<Employee/>} />
        <Route index element={<Login/>} />
        
      </Routes> 
        
      
      
      }
    </div>

  );
}

export default App;
