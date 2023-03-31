import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { Button, Paper } from '@mui/material';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import DialogBox from './DialogBox';
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

export default function Login() {
  const paperStyle = { padding: "30px 10px", width: 500, margin: "20px auto" }
  const [labCode, setLabCode] = React.useState('');
  const [lapCode, setLapCode] = React.useState('')
  const [brand, setBrand] = React.useState('')
  const [hddType, setHddType] = React.useState('')
  const [totalSpace, setTotalSpace] = React.useState('')
  const [ramSize, setRamSize] = React.useState('')
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const laptopCode = labCode+"-"+lapCode;
        const res = await axios.get(`http://localhost:8080/laptops?lapCode=${laptopCode}`);
        const laptop = res.data;

        if (laptop) {
          toast.warning("Laptop code already exists")
          return;
        }
       
        const newLaptop = { laptopCode, brand, hddType, totalSpace, ramSize };
        const registerRes = await axios.post('http://localhost:8080/laptops', newLaptop);

        if (registerRes.data) {
          setDialogOpen(true);
        } else {
          toast.error("Something went wrong");
        }
      } catch (err) {
        console.log(err);
      }
    };
  }

  const validate = () => {

    let result = true;
    if (labCode === "") {

      result = false;
      toast.warning("Please select a LAB")

    }

    if (!lapCode || !brand || !hddType || !totalSpace || !ramSize) {
      result = false;
      toast.warning("All fields are required")

    }

    if (isNaN(totalSpace)) {
      result = false;
      toast.warning("Total space must be a Number")
    }

    if (isNaN(ramSize)) {
      result = false;
      toast.warning("Ram size must be a Number")
    }

    if (totalSpace < 0) {
      result = false;
      toast.warning("Total space must be a positive number")
    }

    if (ramSize < 0) {
      result = false;
      toast.warning("RAM size must be a positive number")

    }

    return result;
  }


  const handleChange = (event) => {
    setLabCode(event.target.value);
  };


  const handleDialogClose = () => {
    setDialogOpen(false);
    setLabCode("");
    setLapCode("");
    setBrand("");
    setHddType("");
    setTotalSpace("");
    setRamSize("");
  };

  return (
    <><Container>
      <Paper elevation={3} style={paperStyle}>
        <h1 >Add Laptop</h1>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <FormControl fullWidth>
            <InputLabel id="label">Lab Name</InputLabel>
            <Select
              labelId="label"
              id="PCLABS"
              value={labCode}
              label="Lab Name"
              onChange={(e) => { handleChange(e) }}
            >
              <MenuItem value={`PCLAB01`}>PCLAB01</MenuItem>
              <MenuItem value={`PCLAB02`}>PCLAB02</MenuItem>
              <MenuItem value={`PCLAB03`}>PCLAB03</MenuItem>
              <MenuItem value={`PCLAB04`}>PCLAB04</MenuItem>
              <MenuItem value={`PCLAB05`}>PCLAB05</MenuItem>
              <MenuItem value={`HALL-16A`}>HALL-16A</MenuItem>
            </Select>
          </FormControl>

          <TextField id="laptopCode" label="Laptop Code" variant="outlined" fullWidth value={lapCode}
            onChange={(e) => setLapCode(e.target.value)} required />
          <br />
          <TextField id="outlined-basic" label="Brand" variant="outlined" fullWidth value={brand}
            onChange={(e) => setBrand(e.target.value)} required />
          <br />
          <TextField id="outlined-basic" label="HDD Type" variant="outlined" fullWidth value={hddType}
            onChange={(e) => setHddType(e.target.value)} required />
          <br />
          <TextField id="outlined-basic" label="Total Space (GB)" variant="outlined" fullWidth value={totalSpace}
            onChange={(e) => setTotalSpace(e.target.value)} required />
          <br />
          <TextField id="outlined-basic" label="Ram Size (GB)" variant="outlined" fullWidth value={ramSize}
            onChange={(e) => setRamSize(e.target.value)} required />
          <br />
          <Button variant="contained" onClick={handleClick}>ADD</Button>
        </Box>
      </Paper>
    </Container>

      <DialogBox
        open={dialogOpen}
        handleClose={handleDialogClose}
        message="Laptop Added Successfully"
      />

      <ToastContainer />
    </>

  );
}


