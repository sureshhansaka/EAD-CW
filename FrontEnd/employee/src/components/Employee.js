import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { Button, Paper } from '@mui/material';

export default function Employee() {
    const paperStyle={padding:"50px 20px", width:400, margin:"20px auto"}

    const[name,setName]=React.useState('')
    const[telephone,setTelephone]=React.useState('')
    const[email,setEmail]=React.useState('')
    const[username,setUsername]=React.useState('')
    const[password,setPassword]=React.useState('')

    const handleClick=(e)=>{
        e.preventDefault()
        const Employee={name,telephone,email,username,password}
        console.log(Employee)
       fetch("http://localhost:8080/emp",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(Employee)
    }).then(()=>{
        console.log("New Employee added")
    })
       
    }
  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}><u>Register form</u></h1>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1},
      }}
      noValidate
      autoComplete="off"
    >
        <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth value={name} 
        onChange={(e)=>setName(e.target.value)}/>
        <br/>
        <TextField id="outlined-basic" label="Telephone" variant="outlined" fullWidth value={telephone}
        onChange={(e)=>setTelephone(e.target.value)}/>
        <br/>
        <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth value={email}
        onChange={(e)=>setEmail(e.target.value)}/>
        <br/>
        <TextField id="outlined-basic" label="Username" variant="outlined" fullWidth value={username}
        onChange={(e)=>setUsername(e.target.value)}/>
        <br/>
        <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth value={password}
        onChange={(e)=>setPassword(e.target.value)}/>
        <br/>
        <Button variant="contained" onClick={handleClick}>Register</Button>
    </Box>
    </Paper>
    </Container>
    
  );
}
