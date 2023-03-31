import * as React from 'react';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import {List, Paper } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function About() {
  const paperStyle = { padding: "40px 40px", width: 300, margin: "20px 20px", display: "inline-block", textAlign: "center" ,borderRadius:"10px" }

  return (
    <Container>
      <h1>About Us</h1>
      
      <Paper elevation={3} style={paperStyle}>
        <h2>Shahein</h2>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <List>hello mawa kapan hello mawa kapan hello mawa kapan hello mawa kapan hello mawa kapan </List>
        </Box>
      </Paper>

      <Paper elevation={3} style={paperStyle}>
        <h2 >Suresh</h2>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <List>hello mawa kapan hello mawa kapan hello mawa kapan hello mawa kapan hello mawa kapan</List>
        </Box>
      </Paper>

      <Paper elevation={3} style={paperStyle}>
        <h2 >Siluni</h2>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <List>hello mawa kapan hello mawa kapan hello mawa kapan hello mawa kapan hello mawa kapan</List>
        </Box>
      </Paper>

      <Paper elevation={3} style={paperStyle}>
        <h2>Sheshami</h2>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <List>hello mawa kapan hello mawa kapan hello mawa kapan hello mawa kapan hello mawa kapan</List>
        </Box>
      </Paper>

      <Paper elevation={3} style={paperStyle}>
        <h2>Dewmi</h2>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <List>hello mawa kapan hello mawa kapan hello mawa kapan hello mawa kapan hello mawa kapan</List>
        </Box>
      </Paper>

      <ToastContainer />
    </Container>

  );
}
