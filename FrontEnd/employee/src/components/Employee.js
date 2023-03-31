import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { Button, Paper } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { Login } from './Login';

export default function Employee() {
  const navigate = useNavigate()
  const paperStyle = { padding: "50px 20px", width: 400, margin: "20px auto" }
  const [name, setName] = React.useState('')
  const [telephone, setTelephone] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [confirmPassword, setConfirmPassword] = React.useState('')

  const handleClick = (e) => {
    e.preventDefault()
    validate();
    const Employee = { name, telephone, email, username, password }
    console.log(Employee)
    fetch("http://localhost:8083/employees", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Employee)
    }).then(() => {
      console.log("New Employee added");
      window.location.href = '/';
    })
      .catch((error) => {
        console.error('Error adding employee:', error);
      });

  }

  const validate = () => {

    let result = true;
    var phoneno = /^\d{10}$/;
    var emailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!name || !telephone || !email || !username || !password) {
      result = false;
      toast.warning("All fields are required")

    }

    if(!telephone.match(phoneno)){
      result = false;
      toast.warning("Telephone not in correct format eg: 0771234567")
    }


    if (!email.match(emailValid)) {
      result = false;
      toast.warning("Email not in correct format eg: someone@example.com") 
    }

    if(password !== confirmPassword){
      result = false;
      toast.warning("Password mismatch") 
    }


    return result;
  }
  return (
    <Container>
      <h1>Laptop Management System</h1>
      <Paper elevation={3} style={paperStyle}>
        <h1>Register form</h1>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth value={name}
            onChange={(e) => setName(e.target.value)} />
          <br />
          <TextField id="outlined-basic" label="Telephone" variant="outlined" fullWidth value={telephone}
            onChange={(e) => setTelephone(e.target.value)} />
          <br />
          <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth value={email}
            onChange={(e) => setEmail(e.target.value)} />
          <br />
          <TextField id="outlined-basic" label="Username" variant="outlined" fullWidth value={username}
            onChange={(e) => setUsername(e.target.value)} />
          <br />
          <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth value={password}
            onChange={(e) => setPassword(e.target.value)}  type="password"/>
          <br />
          <TextField id="outlined-basic" label="Confirm Password" variant="outlined" fullWidth value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}  type="password"/>
          <br />

          <Button variant="contained" onClick={(e) => { handleClick(e) }}>Register</Button>
          <br />
          <Link to={'/'} component={<Login />} >Already have an account? Login</Link>

        </Box>
      </Paper>
      <ToastContainer/>
    </Container>
  );
}
