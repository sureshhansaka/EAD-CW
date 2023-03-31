import React from 'react'
import Employee from './Employee'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { Button, Paper } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Login = () => {

    const paperStyle = { padding: "50px 20px", width: 400, margin: "20px auto" }

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loginStatus, setLoginStatus] = React.useState('');
    const navigate = useNavigate('/register')

    const login = () => {
     if( validate()){
        try {
          axios.get(`http://localhost:8083/employees?username=${username}&password=${password}`)
            .then(res => {
              setLoginStatus(res.data);
              if (loginStatus) {
                navigate('/laptopList');
              } else {
                toast.error("Username or Password Incorrect");
              }
            })
            .catch(err => console.log(err));
        } catch (err) {
          console.log(err);
          toast.error("Error logging in please try again");
        }
      }
    }
      
      const validate = () => {

        let result = true;
        if(!username || !password){
          
          result = false;
          toast.warning("Please enter Username and Password");
    
        }
        return result;
      }

    React.useEffect(() => {
        if (loginStatus) {
            navigate('/laptopList');
        }
    }, [loginStatus, navigate]);

    return (
        <Container>
            <h1>Laptop Management System</h1>
            <Paper elevation={3} style={paperStyle}>
                <h1>Log In</h1>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1 },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label="Username" variant="outlined" fullWidth value={username}
                        onChange={ (e) => {setUsername(e.target.value)}} />
                    <br />
                    <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth value={password}
                        onChange={(e) => setPassword(e.target.value)} type="password" />
                    <br />
                    <Button variant="contained" onClick={(e) => { login(e) }}>Log In</Button>
                    <br />
                    <Link to={'/register'} component={<Employee />} >Don't have an account? Register</Link>
                </Box>
            </Paper>

            <ToastContainer />
        </Container>
    )
}
