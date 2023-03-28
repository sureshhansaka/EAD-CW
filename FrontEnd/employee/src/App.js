
import React, { useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import { AllocateLaptop } from './components/AllocateLaptop';
import Employee from './components/Employee';
import LaptopList  from './components/LaptopList.js';
import { Login } from './components/Login';
import Menu from './components/Menu';
import AddLaptop from './components/AddLaptop'

function App() {
  const MenuLayout = () => (
    <>
      <Menu />
      <Outlet />
    </>
  );

  return (
    <div className="App">
      <Routes>
        <Route element={<MenuLayout/>}>
          <Route path='laptopList' element={<LaptopList/>} />
          <Route path='createlaptop' element={<AddLaptop/>} />
          <Route path='allocatelaptop' element={<AllocateLaptop/>} />
        </Route>
        <Route path='register' element={<Employee/>} />
        <Route index element={<Login/>} />
        
      </Routes>
    </div>

  );
}

export default App;
