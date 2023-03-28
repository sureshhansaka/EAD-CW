import React from 'react'
import Employee from './Employee'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { Button, Paper } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

export const Login = () => {
    
    const paperStyle={padding:"50px 20px", width:400, margin:"20px auto"}

    const[username,setUsername]=React.useState('')
    const[password,setPassword]=React.useState('')

    const navigate = useNavigate()
    
    return (
        <Container>
            <h1>Laptop Management System</h1>
            <Paper elevation={3} style={paperStyle}>
                <h1>Log In</h1>
        <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 1},
        }}
        noValidate
        autoComplete="off"
        >
            <TextField id="outlined-basic" label="Username" variant="outlined" fullWidth value={username}
            onChange={(e)=>setUsername(e.target.value)}/>
            <br/>
            <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth value={password}
            onChange={(e)=>setPassword(e.target.value)}/>
            <br/>
            <Button variant="contained" onClick={() => navigate('/laptoplist')}>Log In</Button>
            <br/>
            <Link to={'/'} component={<Employee/>} >Don't have an account? Register</Link>
        </Box>
        </Paper>
        </Container>
    )
}
