import { Paper } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'

import FilterListIcon from '@mui/icons-material/FilterList';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

export default function LaptopList() {
    const column =[
        {
            name:"id",
            selector : row=> row.id
        },
        {
            name:"laptopCode",
            selector : row=>row.laptopCode
        },
        {
            name:"brand",
            selector : row=>row.brand
        },
        {
            name:"hddType",
            selector : row=>row.hddType
        },
        {
            name:"totalSpace",
            selector : row=>row.totalSpace
        },
        {
            name:"ramSize",
            selector:row=>row.ramSize
        },
        {
            name:"status",
            selector:row=>row.status
        },
    ]

    useEffect(()=>{
        const fetData = async () => {
            axios.get('http://localhost:8080/laptops')
            .then(res => setRecords(res.data))
            .catch(err => console.log(err));
        }
        fetData();
    },[])

    const [records,setRecords] = useState([])
  return (
    <div style={{padding:"50px 10%"}}>
        <Paper>
            <h1>All Laptop</h1>

            <div style={{display:'flex',justifyContent:'left'}}>
            <Tooltip title="Filter list">
            <IconButton>
            <FilterListIcon>
          </FilterListIcon>
            </IconButton>
            </Tooltip>
            </div>
            
      <DataTable
        columns={column}
        data={records}
        pagination
        >
      </DataTable>
      </Paper>
    </div>
  )
}


