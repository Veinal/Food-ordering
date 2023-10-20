import * as React from 'react';
import {useState,useEffect} from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
// import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Navbar from './Navbar';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import sideimage from '../side-image.jpg'
import img1 from '../image01.jpg'
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import CancelIcon from '@mui/icons-material/Cancel';
import Cancelorder from './Cancelorder'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const drawerWidth = 240;

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function ClippedDrawer() {

  const [get3,setGet3]=useState([])
  const [count3,setCount3]=useState(true)

  useEffect(()=>{
    const set3=JSON.parse(localStorage.getItem("Orders"))
    if(set3){
      setGet3(set3)
    }
  },[count3])

  const [open, setOpen] = React.useState(false);
  const [selectedOrder,setSelectedOrder]=useState('')

  const handleOpen = (row) => {
    setOpen(true);
    setSelectedOrder(row)
  }
  const handleClose = () => setOpen(false);


  return (
    <div>
        <Box sx={{ display: 'flex' }}>
          {/* <CssBaseline /> */}
          <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            {/* <Toolbar>
              <Typography variant="h6" noWrap component="div">
                Clipped drawer
              </Typography>
            </Toolbar> */}
            <Navbar/>
          </AppBar>
          <Drawer
            variant="permanent"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
          >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>

              <img src={sideimage} alt="ORDERS" style={{width:'100%',height:'530px'}} />
              
            </Box>
          </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3,}}>
               {/* backgroundImage:`url(${img1})`,width:"100%",height:"595px",backgroundSize:'cover',backgroundRepeat:'no-repeat' */}
              <Toolbar />
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>sl no.</StyledTableCell>
                      <StyledTableCell>Name</StyledTableCell>
                      <StyledTableCell>Phone</StyledTableCell>
                      <StyledTableCell>Address</StyledTableCell>
                      <StyledTableCell>Product</StyledTableCell>
                      <StyledTableCell>Picture</StyledTableCell>
                      <StyledTableCell>Quantity</StyledTableCell>
                      <StyledTableCell>Amount</StyledTableCell>
                      <StyledTableCell>Actions</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {get3.map((row,index) => (
                      <StyledTableRow key={row.name}>
                        <StyledTableCell >{index+1}</StyledTableCell>
                        <StyledTableCell>{row.name}</StyledTableCell>
                        <StyledTableCell>{row.phone}</StyledTableCell>
                        <StyledTableCell>{row.address}</StyledTableCell>
                        <StyledTableCell>{row.product}</StyledTableCell>
                        <StyledTableCell><img src={row.picture} alt="" style={{width:40}} /></StyledTableCell>
                        <StyledTableCell>{row.quantity}</StyledTableCell>
                        <StyledTableCell>{row.totalAmount}</StyledTableCell>
                        <StyledTableCell>
                          <Button variant='contained' color='error' onClick={()=>handleOpen(row)}><CancelIcon/>Cancel</Button>
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              
            </Box>
        </Box>

        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Cancelorder get3={get3} selectedOrder={selectedOrder} setGet3={setGet3} setCount3={setCount3} handleClose={handleClose}/>
        </Box>
      </Modal>
    </div>
  );
}