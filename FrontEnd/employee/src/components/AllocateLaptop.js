import { Container } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import DataTable from 'react-data-table-component'
import FilterListIcon from '@mui/icons-material/FilterList';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { DataGrid } from '@mui/x-data-grid';

export const AllocateLaptop = () => {
  const[laptopno,setLaptopNo]=useState('')
  const[hallno,setHallNo]=useState('')
  const[value,setValue]=useState(null)

  const navigate = useNavigate()

  const column =[

    {
        name:"Laptop Code",
        selector : row=>row.laptopCode
    },
    {
        name:"Brand",
        selector : row=>row.brand
    },
    {
        name:"HDD Type",
        selector : row=>row.hddType
    },
    {
        name:"Total Space",
        selector : row=>row.totalSpace
    },
    {
        name:"Ram Size",
        selector:row=>row.ramSize
    },
]
  
  useEffect(()=>{
    const fetData = async () => {
        axios.get('http://localhost:8080/laptops/available?labName=PCLAB01')
        .then(res => setRecords(res.data))
        .catch(err => console.log(err));
    }
    fetData();
  },[])

  const [records,setRecords] = useState([])

  return (
    <div className='container'>
        <h2>Allocate Laptop</h2>
        
        <div style={{display:'flex',justifyContent:'left'}}>
            <Tooltip title="Filter list">
            <IconButton>
            <FilterListIcon>
            </FilterListIcon>
            </IconButton>
            </Tooltip>
            </div>
            
      <DataTable
        columns={column}
        data={records}
        pagination
        checkboxSelection
        >
      </DataTable>

        <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 1},
        }}
        noValidate
        autoComplete="off"
        >
            <TextField id="outlined-basic" label="Laptop Code" variant="outlined" value={laptopno}
            onChange={(e)=>setLaptopNo(e.target.value)} required/>
            <br/>
            <TextField id="outlined-basic" label="Hall Number" variant="outlined" value={hallno}
            onChange={(e)=>setHallNo(e.target.value)} required/>
            <br/>
            
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker  
              label="Allocated Date"
              value={value}
              onChange={(newValue)=>setValue(newValue)}
              renderInput={(props) => <TextField {...props} required/> }
              />
            </LocalizationProvider>
            <br/>
            
            <Button variant="contained" onClick={() => navigate('')}>Allocate Laptop</Button>

        </Box>
    </div>
    
  )
}

