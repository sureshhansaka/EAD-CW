
import React, { useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import { AllocateLaptop } from './components/AllocateLaptop';
import Employee from './components/Employee';
import LaptopList  from './components/LaptopList';
import { Login } from './components/Login';
import Menu from './components/Menu';
import AddLaptop from './components/AddLaptop'
import { ReturnLaptop } from './components/ReturnLaptop';
import UpdateLaptop from './components/UpdateLaptop'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#006064',
    },
    secondary: {
      main: '#4ac2d7',
    },
  },
});

function App({}) {
  const MenuLayout = () => (
    <>
      <Menu />
      <Outlet />
    </>
  );

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route element={<MenuLayout/>}>
            <Route path='laptopList' element={<LaptopList/>} />

            <Route path='addlaptop' element={<AddLaptop/>} />

            <Route path='returnlaptop' element={<ReturnLaptop/>} />

            <Route path='allocatelaptop' element={<AllocateLaptop/>} />
            <Route path = 'updateLaptop' element= {<UpdateLaptop/>}/>
          </Route>
          <Route path='register' element={<Employee/>} />
          <Route index element={<Login/>} />
          
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
