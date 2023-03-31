import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import DialogBox from './DialogBox';


export default function UpdateLaptop(props) {
    const paperStyle = { padding: "50px 50px", width: 400, margin: "50px auto", borderRadius: "10px" }

    const { laptopCode } = props;
    const [brand, setBrand] = React.useState("");
    const [hddType, setHddType] = React.useState("");
    const [totalSpace, setTotalSpace] = React.useState("");
    const [ramSize, setRamSize] = React.useState("");
    const [dialogOpen, setDialogOpen] = React.useState(false);

    const handleDialogClose = () => {
        setDialogOpen(false);
        setBrand("");
        setHddType("");
        setTotalSpace("");
        setRamSize("");
    };

    React.useEffect(() => {

        const fetData = async () => {
            axios.get(`http://localhost:8080/laptops?lapCode=${laptopCode}`)
                .then(res => {
                    console.log(res)
                    setBrand(res.data.brand)
                    setHddType(res.data.hddType)
                    setTotalSpace(res.data.totalSpace)
                    setRamSize(res.data.ramSize)
                })
                .catch(err => console.log(err));
        }
        fetData();
    }, [laptopCode])


    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const laptop = { laptopCode, brand, hddType, totalSpace, ramSize }
        console.log(laptop)
        fetch("http://localhost:8080/laptops", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(laptop)
        }).then(() => {
            console.log("Laptop changed");
            setDialogOpen(true);
            navigate('/laptopList');

        }).catch(err => console.log(err));
    };


    return (
        <div>
            <Paper elevation={3} style={paperStyle}>
                <h2>Update laptop</h2>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1 },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label="Laptop Code" variant="outlined" fullWidth value={laptopCode}  InputProps={{ readOnly: true,  }}/>
                    <br />
                    <TextField id="outlined-basic" label="Brand" variant="outlined" fullWidth value={brand}
                        onChange={(e) => setBrand(e.target.value)} required/>
                    <br />
                    <TextField id="outlined-basic" label="HDD Type" variant="outlined" fullWidth value={hddType}
                        onChange={(e) => setHddType(e.target.value)} required/>
                    <br />
                    <TextField id="outlined-basic" label="Total Space (GB)" variant="outlined" fullWidth value={totalSpace}
                        onChange={(e) => setTotalSpace(e.target.value)} required/>
                    <br />
                    <TextField id="outlined-basic" label="Ram Size (GB)" variant="outlined" fullWidth value={ramSize}
                        onChange={(e) => setRamSize(e.target.value)} required/>
                    <br />
                    <Button variant="contained" onClick={(e) => { handleSubmit(e) }}>UPDATE</Button>
                </Box>
                </Paper>
            <DialogBox
                open={dialogOpen}
                handleClose={handleDialogClose}
                message="Laptop Updated Successfully"
            />
        </div>

    );
}
