import { Container } from '@mui/system'
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export const AllocateLaptop = () => {
  const[laptopno,setLaptopNo]=useState('')
  const[hallno,setHallNo]=useState('')
  const[value,setValue]=useState(null)

  const navigate = useNavigate()

  const column =[
    {
        name:"id",
        selector : row=> row.id
    },
    {
        name:"laptopCode",
        selector : row=>row.laptopCode
    },
    {
        name:"brand",
        selector : row=>row.brand
    },
    {
        name:"hddType",
        selector : row=>row.hddType
    },
    {
        name:"totalSpace",
        selector : row=>row.totalSpace
    },
    {
        name:"ramSize",
        selector:row=>row.ramSize
    },
    {
        name:"status",
        selector:row=>row.status
    },
]

  return (
    <div className='container'>
        <h2>Allocate Laptop</h2>
        
        <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 1},
        }}
        noValidate
        autoComplete="off"
        >
            <TextField id="outlined-basic" label="Laptop Number" variant="outlined" fullWidth value={laptopno}
            onChange={(e)=>setLaptopNo(e.target.value)}/>
            <br/>
            <TextField id="outlined-basic" label="Hall Number" variant="outlined" fullWidth value={hallno}
            onChange={(e)=>setHallNo(e.target.value)}/>
            <br/>
            
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker  
              label="Allocated Date"
              value={value}
              onChange={(newValue)=>setValue(newValue)}
              renderInput={(props) => <TextField {...props} /> }
              />
            </LocalizationProvider>
            <br/>
            
            <Button variant="contained" onClick={() => navigate('')}>Allocate Laptop</Button>

        </Box>
    </div>
    
  )
}

