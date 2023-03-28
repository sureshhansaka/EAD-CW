
import React, { useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import { AllocateLaptop } from './components/AllocateLaptop';
import Employee from './components/Employee';
import LaptopList  from './components/LaptopList';
import { Login } from './components/Login';
import Menu from './components/Menu';
import  AddLaptop  from './components/AddLaptop'

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
          <Route path='addlaptop' element={<AddLaptop/>} />
          <Route path='allocatelaptop' element={<AllocateLaptop/>} />
        </Route>
        <Route index element={<Employee/>} />
        <Route path='login' element={<Login/>} />
        
      </Routes>
    </div>

  );
}

export default App;
