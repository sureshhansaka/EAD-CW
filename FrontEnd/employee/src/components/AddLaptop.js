import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { Button, Paper } from '@mui/material';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Laptop } from '@mui/icons-material';

export default function Login() {
    const paperStyle={padding:"30px 10px", width:500, margin:"20px auto"}
    const [labCode, setLabCode] = React.useState('');

    const[laptopCode,setLaptopCode]=React.useState('')
    const[brand,setBrand]=React.useState('')
    const[hddType,setHddType]=React.useState('')
    const[totalSpace,setTotalSpace]=React.useState('')
    const[ramSize,setRamSize]=React.useState('')

    const handleClick=(e)=>{
        e.preventDefault()
        const Employee={lapcode,brand,hddType,totalSpace,ramSize}
        console.log(Laptop)
       fetch("http://localhost:8080/laptops",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(Laptop)
    }).then(()=>{
        console.log("New laptop added")
    })
       
    }



    const handleChange = (event) => {
        setLabCode(event.target.value);
      };

  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}><u>Add laptop</u></h1>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1},
      }}
      noValidate
      autoComplete="off"
    >
        <FormControl fullWidth>
        <InputLabel id="label">Lab Code</InputLabel>
        <Select
          labelId="label"
          id="demo-simple-select"
          value={labCode}
          label="Lab Name"
          onChange={handleChange}
        >
          <MenuItem value={1}>PCLAB01</MenuItem>
          <MenuItem value={2}>PCLAB02</MenuItem>
          <MenuItem value={3}>PCLAB03</MenuItem>
        </Select>
        </FormControl>
        <TextField id="outlined-basic" label="Laptop Code" variant="outlined" fullWidth/>
        <br/>
        <TextField id="outlined-basic" label="Brand" variant="outlined" fullWidth value={brand} 
        onChange={(e)=>setBrand(e.target.value)}/>
        <br/>
        <TextField id="outlined-basic" label="HDD Type" variant="outlined" fullWidth value={hddType} 
        onChange={(e)=>setHddType(e.target.value)}/>
        <br/>
        <TextField id="outlined-basic" label="Total Space" variant="outlined" fullWidth value={totalSpace} 
        onChange={(e)=>setTotalSpace(e.target.value)}/>
        <br/>
        <TextField id="outlined-basic" label="Ram Size" variant="outlined" fullWidth value={ramSize} 
        onChange={(e)=>setRamSize(e.target.value)}/>
        <br/>
        <Button variant="contained" onClick={handleClick}>ADD</Button>
    </Box>
    </Paper>
    </Container>
    
  );
}