import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { Button, List, Paper } from '@mui/material';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import DialogBox from './DialogBox';
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { alignProperty } from '@mui/material/styles/cssUtils';

export default function About() {
    const paperStyle = { padding: "10px 10px", width: 300, margin: "20px auto",alignProperty:""}

  return (
    <><Container>
      <Paper elevation={3} style={paperStyle}>
        <h1 >Shahein</h1>
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
        <h1 >Suresh</h1>
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
        <h1 >Siluni</h1>
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
        <h1 >Dewmi</h1>
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
