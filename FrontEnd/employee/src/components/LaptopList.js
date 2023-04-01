import { Container, Paper } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import UpdateLaptop from './UpdateLaptop';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

export default function LaptopList() {
    const paperStyle = { padding: "50px 50px", width: 1000, margin: "20px auto", display: "inline-block", borderRadius: "10px" }
    const [laptopCode,setLaptopCode] = React.useState("");
    const [labCode, setLabCode] = React.useState('');
    const [showUpdateComponent, setShowUpdateComponent] = useState(false);
    const [records, setRecords] = useState([])
    
    const column = [
        {
            name: "Laptop Code",
            selector: row => row.laptopCode
        },
        {
            name: "Brand",
            selector: row => row.brand
        },
        {
            name: "HDD Type",
            selector: row => row.hddType
        },
        {
            name: "Total Space",
            selector: row => row.totalSpace+" GB"
        },
        {
            name: "Ram Size",
            selector: row => row.ramSize+" GB"
        },
        {
            name: "Status",
            cell: (row) => (
                <label>{loadStatus(row.status)}</label>
            ),
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
        {
            name: "Action",
            cell: (row) => (

                <>
                    <IconButton onClick={() => deleteLaptop(row.laptopCode)}>
                        <DeleteIcon color="error"/>
                    </IconButton>

                    <IconButton onClick={() => updateLaptop(row.laptopCode)} >
                        <EditIcon color="primary"/>
                    </IconButton>
                </>

            ),
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        }
    ]

    useEffect(() => {
        const fetData = async () => {
            axios.get('http://localhost:8080/laptops')
                .then(res => setRecords(res.data))
                .catch(err => console.log(err));
        }
        fetData();
    }, [])

    const deleteLaptop = (laptopCode) => {
        //e.preventDefault()
        if (window.confirm(`Are you sure you want to delete ${laptopCode}`) === true) {
            fetch(`http://localhost:8080/laptops/${laptopCode}`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },


            }).then(() => {
                console.log("Laptop Deleted")
                alert("Laptop Deleted Successfully")
                setRecords(records.filter(record => record.laptopCode !== laptopCode));
            }).catch(err => console.log(err));
        }
        
    }

    const updateLaptop = (laptopCode)=> {
        setLaptopCode(laptopCode);
        setShowUpdateComponent(prevState => !prevState);
    }

    const loadStatus = (status) => {
        if (status === 1) {
            return 'Available';
        }
        else if (status === 0) {
            return 'Not Available';
        }
    }

    const filterLaptops = (event) => {
    event.preventDefault();
    try {
      axios.get(`http://localhost:8080/laptops?labName=${event.target.value}`)
        .then(res => setRecords(res.data))
        .catch(err => console.log(err));

    } catch (err) {
      console.log(err);
    }
    setLabCode(event.target.value);
  };

  const selectLaptopCode = (row) => {
    setLaptopCode(row.laptopCode);
    setLabCode(row.labCode);
  };

    return (
        <Container>


                <h1>Registered Laptops</h1>

           
            <Paper elevation={3} style={paperStyle}>
                <FormControl fullWidth>
                    <InputLabel id="label">Lab Code</InputLabel>
                    <Select
                        labelId="label"
                        id="demo-simple-select"
                        value={labCode}
                        label="Lab Name"
                        onChange={(e) => { filterLaptops(e) }}
                    >
                    <MenuItem value={`PCLAB01`}>PCLAB01</MenuItem>
                    <MenuItem value={`PCLAB02`}>PCLAB02</MenuItem>
                    <MenuItem value={`PCLAB03`}>PCLAB03</MenuItem>
                    <MenuItem value={`PCLAB04`}>PCLAB04</MenuItem>
                    <MenuItem value={`PCLAB05`}>PCLAB05</MenuItem>
                    <MenuItem value={`HALL-16A`}>HALL-16A</MenuItem>
                    </Select>
                </FormControl>
                <DataTable
                    columns={column}
                    data={records}
                    pagination
                >
                </DataTable>
            </Paper>
            {showUpdateComponent && <UpdateLaptop laptopCode = {laptopCode}/>}
        </Container>
    )
}


