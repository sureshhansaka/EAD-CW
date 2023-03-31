import * as React from 'react';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import {List, Paper } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function About() {
    const paperStyle = { padding: "10px 10px", width: 300, margin: "20px 30px",height:"275px" , display: "inline-block", verticalAlign: "top", textAlign: "center" ,borderRadius:"20px" }

  return (
    <><Container>
      <Paper elevation={3} style={paperStyle}>
        <h1 >Shahein</h1>
        <h3>COHDSE22.2F-027</h3>
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
        <h1 >Suresh</h1>
        <h3>COHDSE22.2F-013</h3>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <List>hello mawa kapan hello mawa kapan hello mawa kapan hello mawa kapan hello mawa kapan hello mawa kapan </List>
        </Box>
      </Paper>

      <Paper elevation={3} style={paperStyle}>
        <h1 >Siluni</h1>
        <h3>COHDSE22.2F-011</h3>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <List>hello mawa kapan</List>
        </Box>
      </Paper>

      <Paper elevation={3} style={paperStyle}>
        <h1>Sheshami</h1>
        <h3>COHDSE22.2F-024</h3>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <List>hello mawa kapan hello mawa kapan hello mawa kapan hello mawa kapan hello mawa kapan hello mawa kapan hello mawa kapan </List>
        </Box>
      </Paper>

      <Paper elevation={3} style={paperStyle}>
        <h1 >Dewmi</h1>
        <h3>COHDSE22.2F-021</h3>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <List>hello mawa kapan</List>
        </Box>
      </Paper>
    </Container>

      <ToastContainer />
    </>

  );
}
