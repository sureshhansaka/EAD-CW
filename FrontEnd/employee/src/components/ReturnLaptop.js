import { Button } from '@mui/material';
import axios from 'axios'
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import DialogBox from './DialogBox';

export const ReturnLaptop = () => {
    const [dialogOpen, setDialogOpen] = React.useState(false);
    const [returnedDateTime, setReturnedDateTime] = React.useState(new Date().toISOString().replace('T', ' ').slice(0, 19))
    const [status, setStatus] = React.useState(1);
    const [laptopCode, setLaptopCode] = React.useState('');
    const returnLaptop = (laptopCode, issuedDateTime) => {

        if (window.confirm("Are you sure you want to return the Laptop ?")) {
            const retrunLaptop = { laptopCode, issuedDateTime, returnedDateTime}
            console.log(retrunLaptop)
            fetch("http://localhost:8082/allocations", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(retrunLaptop)
            }).then(() => {
                console.log("Laptop returned");
                setDialogOpen(true);
            }).catch(err => console.log(err));
        }
    }

    const column = [

        {
            name: "Laptop Code",
            selector: row => row.laptopCode
        },
        {
            name: "Issued Date & Time",
            selector: row => row.issuedDateTime
        },
        {
            name: "Issued Hall",
            selector: row => row.issuedTo
        },
        {
            name: "Action",
            cell: (row) => (
                <Button onClick={(e)=>{returnLaptop(row.laptopCode, row.issuedDateTime); changeLaptopStatus(row.laptopCode);}}>Return</Button>

            ),
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        }

    ]

    useEffect(() => {
        const fetData = async () => {
            axios.get('http://localhost:8082/allocations')
                .then(res => setRecords(res.data))
                .catch(err => console.log(err));
        }
        fetData();
    }, [])

    const [records, setRecords] = useState([])

    const handleDialogClose = () => {
        setDialogOpen(false);
      };
    
      const changeLaptopStatus = (laptopCode) => {
        const laptop = {laptopCode, status}
        console.log(laptop)
        fetch("http://localhost:8080/laptops",{
          method: "PUT",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(laptop)
        }).then(()=> {
          console.log("Laptop status changed");
          setRecords(records.filter(record => record.laptopCode !== laptopCode));
        }).catch(err => console.log(err));
      };

    return (
        <div className='container'>
            <h2>Return Laptop</h2>
            <DataTable
                columns={column}
                data={records}
                pagination
                checkboxSelection>
            </DataTable>

            <DialogBox
        open={dialogOpen}
        handleClose={() => {handleDialogClose()}}
        message="Laptop Returned Successfully"
      />
        </div>

    )
}
