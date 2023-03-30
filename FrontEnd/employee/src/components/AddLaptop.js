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


export default function Login() {
  const paperStyle = { padding: "30px 10px", width: 500, margin: "20px auto" }
  const [labCode, setLabCode] = React.useState('');
  const [laptopCode, setLaptopCode] = React.useState('')
  const [brand, setBrand] = React.useState('')
  const [hddType, setHddType] = React.useState('')
  const [totalSpace, setTotalSpace] = React.useState('')
  const [ramSize, setRamSize] = React.useState('')
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    if (validate()){
      const Laptop = { laptopCode, brand, hddType, totalSpace, ramSize }
      console.log(Laptop)
      fetch("http://localhost:8080/laptops", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Laptop)

      }).then(() => {
        console.log("New laptop added")
        setDialogOpen(true);

      }).catch(err => console.log(err));
    }
  }

  const validate = () => {
    let result = true;
    if (!laptopCode || !brand || !hddType || !totalSpace || !ramSize) {
      result = false;
      toast.warning("All fields are required");
      return result;
    }

    // Validate input format
    if (totalSpace < 0) {
      result = false;
      toast.warning("Total space must be a positive number");
      return result;
    }

    if (ramSize < 0) {
      result = false;
      toast.warning("RAM size must be a positive number");
      return result;
    }

    return result;
  }


  const handleChange = (event) => {
    setLabCode(event.target.value);
  };


  const handleDialogClose = () => {
    setDialogOpen(false);
    setLabCode("");
    setLaptopCode("");
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
              id="demo-simple-select"
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

          <TextField id="laptopCode" label="Laptop Code" variant="outlined" fullWidth
            onChange={(e) => setLaptopCode(`${labCode}-${e.target.value}`)} required />
          <br />
          <TextField id="outlined-basic" label="Brand" variant="outlined" fullWidth value={brand}
            onChange={(e) => setBrand(e.target.value)} required />
          <br />
          <TextField id="outlined-basic" label="HDD Type" variant="outlined" fullWidth value={hddType}
            onChange={(e) => setHddType(e.target.value)} required />
          <br />
          <TextField id="outlined-basic" label="Total Space" variant="outlined" fullWidth value={totalSpace}
            onChange={(e) => setTotalSpace(e.target.value)} required />
          <br />
          <TextField id="outlined-basic" label="Ram Size" variant="outlined" fullWidth value={ramSize}
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
    </>

  );
}