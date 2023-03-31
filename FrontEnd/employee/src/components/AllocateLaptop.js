import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Paper } from '@mui/material';
import DataTable from 'react-data-table-component'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import DialogBox from './DialogBox';

import FormControl from '@mui/material/FormControl';
import { ToastContainer, toast } from 'react-toastify';

export const AllocateLaptop = () => {
  const paperStyle = { padding: "50px 50px", width: 1000, margin: "20px auto", display: "inline-block", borderRadius: "10px" }
  const paperStyle2 = { padding: "50px 50px", width: 400, margin: "50px auto", borderRadius: "10px" }

  const [laptopCode, setLaptopCode] = useState('')
  const [issuedTo, setIssuedTo] = useState('')
  const [labCode, setLabCode] = React.useState('');
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const column = [

    {
      name: "Laptop Code",
      selector: row => row.laptopCode
    },
    {
      name: "Brand",
      selector: row => row.brand
    },
    {
      name: "HDD Type",
      selector: row => row.hddType
    },
    {
      name: "Total Space",
      selector: row => row.totalSpace
    },
    {
      name: "Ram Size",
      selector: row => row.ramSize
    },
    {
      name: "Action",
      cell: (row) => (
        <Button onClick={() => selectLaptopCode(row)}>Select</Button>
      ),

      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    }
  ]

  useEffect(() => {
    const fetData = async () => {
      axios.get('http://localhost:8080/laptops/available?labName=')
        .then(res => setRecords(res.data))
        .catch(err => console.log(err));
    }
    fetData();
  }, [])

  const [records, setRecords] = useState([])

  const filterLaptops = (event) => {
    event.preventDefault();
    try {
      axios.get(`http://localhost:8080/laptops/available?labName=${event.target.value}`)
        .then(res => setRecords(res.data))
        .catch(err => console.log(err));

    } catch (err) {
      console.log(err);
    }
    setLabCode(event.target.value);
  };

  const selectLaptopCode = (row) => {
    setLaptopCode(row.laptopCode);
    setLabCode(row.labCode);
  };

  const allocateLaptop = (event) => {

    event.preventDefault()
    if (validate()) {
      const allocate = { laptopCode, issuedTo }
      console.log(allocate)
      fetch("http://localhost:8082/allocations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(allocate)

      }).then(() => {
        console.log("Laptop allocated")
        setDialogOpen(true);
        changeLaptopStatus(event);

      }).catch(err => console.log(err));
    }
  };

  const changeLaptopStatus = (event) => {
    event.preventDefault()
    fetch(`http://localhost:8080/laptops/${laptopCode}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      console.log("Laptop status changed");
      setRecords(records.filter(record => record.laptopCode !== laptopCode));
    }).catch(err => console.log(err));
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setLaptopCode("");
    setIssuedTo("");

  };

  const validate = () => {
    if (!laptopCode || !issuedTo) {
      toast.warning("Please fill all the fields");
      return false;
    }
    return true;
  };

  return (

    <div>
      <h1>Allocate Laptop</h1>

      <Paper elevation={3} style={paperStyle}>
      <FormControl fullWidth>
        <InputLabel id="label">Lab Code</InputLabel>
        <Select
          labelId="label"
          id="demo-simple-select"
          value={labCode}
          label="Lab Name"
          onChange={(e) => { filterLaptops(e) }}
        >
          <MenuItem value={`PCLAB01`}>PCLAB01</MenuItem>
          <MenuItem value={`PCLAB02`}>PCLAB02</MenuItem>
          <MenuItem value={`PCLAB03`}>PCLAB03</MenuItem>
          <MenuItem value={`PCLAB04`}>PCLAB04</MenuItem>
          <MenuItem value={`PCLAB05`}>PCLAB05</MenuItem>
          <MenuItem value={`HALL-16A`}>HALL-16A</MenuItem>
        </Select>
      </FormControl>

      <DataTable
        columns={column}
        data={records}
        pagination
        checkboxSelection>
      </DataTable>
      </Paper>
      
      <Paper elevation={3} style={paperStyle2}>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <h2>Enter Details</h2>
        <TextField id="outlined-basic" label="Laptop Code" variant="outlined" fullWidth value={laptopCode}
          onChange={(e) => setLaptopCode(e.target.value)} required />
        <br />
        <TextField id="outlined-basic" label="Hall Number" variant="outlined" fullWidth value={issuedTo}
          onChange={(e) => setIssuedTo(e.target.value)} required />
        <br />

        <Button variant="contained" onClick={(e) => { allocateLaptop(e);  }}>Allocate Laptop</Button>

      </Box>
      </Paper>

      <DialogBox
        open={dialogOpen}
        handleClose={() => { handleDialogClose() }}
        message="Laptop Allocated Successfully"
      />

      <ToastContainer/>

    </div>


  )
}

