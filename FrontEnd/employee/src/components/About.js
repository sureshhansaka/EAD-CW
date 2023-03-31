import * as React from 'react';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import {List, Paper } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function About() {
  const paperStyle = { padding: "40px 30px", width: 300, margin: "20px 20px", height:"180px", textAlign: "center", borderRadius:"10px", display: "inline-block"}

  return (
    <Container>
      <h1>About Us</h1>
      
      <Paper elevation={3} style={paperStyle}>
        <h2>S.N. OCKERSZ</h2>
        <h3>COHDSE22.2F-27</h3>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <List>Worked on Laptop Tracker microservice and overlooked the overall work of the backend-side.</List>
        </Box>
      </Paper>

      <Paper elevation={3} style={paperStyle}>
        <h2>K.G.D.S. HANSAKA</h2>
        <h3>COHDSE22.2F-13</h3>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <List>Worked on the UI using react js</List>
        </Box>
      </Paper>

      <Paper elevation={3} style={paperStyle}>
        <h2>S.S. WIMALASIRI</h2>
        <h3>COHDSE22.2F-24</h3>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <List>Worked on the Laptop Issuance Microservice</List>
        </Box>
      </Paper>

      <Paper elevation={3} style={paperStyle}>
        <h2>W.M.T.D. UDANGAWE</h2>
        <h3>COHDSE22.2F-21</h3>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <List>Worked on the Sign-In Microservice</List>
        </Box>
      </Paper>

      <Paper elevation={3} style={paperStyle}>
        <h2>S.E. KOPERAHEWA</h2>
        <h3>COHDSE22.2F-11</h3>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <List>Worked on the UI using react js</List>
        </Box>
      </Paper>

      <ToastContainer />
    </Container>

  );
}
