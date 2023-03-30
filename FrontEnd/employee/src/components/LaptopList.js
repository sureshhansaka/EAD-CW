import { Paper } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import FilterListIcon from '@mui/icons-material/FilterList';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit'

export default function LaptopList() {
    const column =[
        {
            name:"Laptop Code",
            selector : row=>row.laptopCode
        },
        {
            name:"Brand",
            selector : row=>row.brand
        },
        {
            name:"HDD Type",
            selector : row=>row.hddType
        },
        {
            name:"Total Space",
            selector : row=>row.totalSpace
        },
        {
            name:"Ram Size",
            selector:row=>row.ramSize
        },
        {
            name:"Status",
            cell:(row) =>(
                <label>{loadStatus(row.status)}</label>
            ),
            ignoreRowClick: true,
              allowOverflow: true,
              button: true,
        },
        {
            name:"Action",
            cell: (row) => (
                
                <>                
                <IconButton onClick={() => deleteLaptop(row.laptopCode)}>
                  <DeleteIcon />
                </IconButton>

                <IconButton>
                    <EditIcon/>
                </IconButton>
                </>

              ),
              ignoreRowClick: true,
              allowOverflow: true,
              button: true,
        }
    ]

    useEffect(()=>{
        const fetData = async () => {
            axios.get('http://localhost:8080/laptops')
            .then(res => setRecords(res.data))
            .catch(err => console.log(err));
        }
        fetData();
    },[])

    const deleteLaptop = (laptopCode) => {
        alert(`delete ${laptopCode}`);
    }

    const loadStatus = (status) => {
        if(status == 1){
            return 'Available';
        }
        else if(status == 0){
            return 'Not Available';
        }
    }

    const [records,setRecords] = useState([])
  return (
    <div style={{padding:"50px 10%"}}>
        <Paper>
            <h1>Laptops</h1>

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


