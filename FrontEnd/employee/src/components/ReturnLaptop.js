import { Button } from '@mui/material';
import axios from 'axios'
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component'

export const ReturnLaptop = () => {
    const column =[

        {
            name:"Laptop Code",
            selector : row=>row.laptopCode
        },
        {
            name:"Issued Date & Time",
            selector : row=>row.brand
        },
        {
            name:"Issued Hall",
            selector : row=>row.hddType
        },
        {
            name: "Action",
            cell: (row) => (
                <Button>Return</Button>

            ),
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        }

    ]
      
      useEffect(()=>{
        const fetData = async () => {
            axios.get('http://localhost:8082/allocations')
            .then(res => setRecords(res.data))
            .catch(err => console.log(err));
        }
        fetData();
      },[])

      const [records,setRecords] = useState([])

  return (
    <div className='container'>
        <h2>Return Laptop</h2>
        <DataTable
        columns={column}
        data={records}
        pagination
        checkboxSelection>
        </DataTable>
    </div>

  )
}
