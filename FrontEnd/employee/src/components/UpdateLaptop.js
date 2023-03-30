import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { Button, Paper } from '@mui/material';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


export default function UpdateLaptop() {
    const paperStyle={padding:"30px 10px", width:500, margin:"20px auto"}

    const {laptopCode} = useParams();
    const [values,setValues] = React.useState({
        laptopCode : laptopCode,
        brand: '',
        hddType:'',
        totalSpace:'',
        ramSize:'',

    })
    React.useEffect(()=>{
        axios.get('http://localhost:8080/laptops/'+laptopCode)
        .then(res => {
            setValues({...values,laptopCode:res.data.laptopCode ,brand:res.data.brand,hddType:res.data.hddType,totalSpace:res.data.totalSpace,ramSize:res.data.ramSize})
        })
        .catch(err => console.log(err))
    }, [])

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8080/laptops/'+laptopCode, values)
        .then(res => {
            navigate('/');
        })
        .catch(err => console.log(err))
    }

    return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}><u>Update laptop</u></h1>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1},
      }}
      noValidate
      autoComplete="off"
    >
        <TextField id="outlined-basic" label="Laptop Code" variant="outlined" fullWidth  value={values.laptopCode}
        onChange={e => setValues({...values, laptopCode:e.target.value})}/>
        <br/>
        <TextField id="outlined-basic" label="Brand" variant="outlined" fullWidth value={values.brand} 
        onChange={e => setValues({...values, brand:e.target.value})}/>
        <br/>
        <TextField id="outlined-basic" label="HDD Type" variant="outlined" fullWidth value={values.hddType} 
        onChange={e => setValues({...values, hddType:e.target.value})}/>
        <br/>
        <TextField id="outlined-basic" label="Total Space" variant="outlined" fullWidth value={values.totalSpace} 
        onChange={e => setValues({...values, totalSpace:e.target.value})}/>
        <br/>
        <TextField id="outlined-basic" label="Ram Size" variant="outlined" fullWidth value={values.ramSize} 
        onChange={e => setValues({...values, ramSize:e.target.value})}/>
        <br/>
        <Button variant="contained" onSubmit={handleSubmit}>UPDATE</Button>
    </Box>
    </Paper>
    </Container>
    
  );
}
