import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';
// import { Button } from 'bootstrap';
import { Button } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Modal from '@mui/material/Modal';
import Orderdeletecard from './Orderdeletecard'
import Vieworders from './Vieworders'
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';



const drawerWidth = 150;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height:500,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};

const style2 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Orderlist() {
  const [getOrders,setGetOrders]=useState([])
  const [count2,setCount2]=useState(true)

  useEffect(()=>{
    const set2=JSON.parse(localStorage.getItem("Orders"))
    if(set2){
      setGetOrders(set2)
    }
  },[count2])

  //View option
  const [open6, setOpen6] = React.useState(false);
  const handleOpenedit = (o) =>{
    setOpen6(true);
    setSelectedProd2(o)
  }
  const handleCloseedit = () => setOpen6(false);

  //Delete option
  const [open7, setOpen7] = React.useState(false);
  const [selectedProd2,setSelectedProd2]=useState('')
  
  const handleOpendel2 = (o) =>{ 
    setOpen7(true);
    setSelectedProd2(o)
  }
  const handleClosedel = () => setOpen7(false);



  return (
    <div>
      <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
        <Link to='/' ><Button variant='contained' color='success' style={{marginLeft:'-10px',padding:'8px'}}><ArrowBackIcon/> Back to home</Button></Link>
          <Typography variant="h6" noWrap component="div" style={{marginLeft:'20px'}}>
            ADMIN DASHBOARD
          </Typography>
        </Toolbar>
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
          <List>
            <Link to='/productlist'>
                <ListItemButton>
                  {/* <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon> */}
                  <ListItemText secondary='Product list' />
                </ListItemButton>
            </Link>
            <Link to='/orderlist'>
                <ListItemButton>
                  {/* <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon> */}
                  <ListItemText secondary='Order list' />
                </ListItemButton>
            </Link>
            <Link to='/categorylist'>
                    <ListItemButton>
                    {/* <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon> */}
                    <ListItemText secondary='Category list' />
                    </ListItemButton>
                </Link>
          </List>
          
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography paragraph>
          <table className="table align-middle mb-0 bg-white">
            <thead className="bg-light">
              <tr>
                <th>Sl no.</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Product</th>
                <th>Picture</th>
                <th>Quantity</th>
                <th>Amount</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {getOrders?.map((o,index)=>{
                return(
                  <>
                  <tr>
                    <td>{index+1}</td>
                    <td>{o.name}</td>
                    <td>{o.phone}</td>
                    <td>{o.address}</td>
                    <td>{o.product}</td>
                    <td><img src={o.picture} alt="" style={{width:40}} /></td>
                    <td>{o.quantity}</td>
                    <td>{o.totalAmount}</td>
                    <td style={{display:'flex', gap:'6px'}}>  
                      <Button onClick={()=>handleOpenedit(o)}  variant='contained' color='success'><VisibilityIcon fontSize='small'/>View</Button>
                      {/* <Link to={`/editorderlist/${o.id2}`}><Button  variant='contained' color='primary'>Edit</Button></Link> */}
                      <Button onClick={()=>handleOpendel2(o)}  variant='contained' color='error'><DeleteIcon fontSize='small'/>Delete</Button>
                    </td>
                  </tr>
                  </>
                )
              })}
            </tbody>
          </table>
                  
        </Typography>
      </Box>
    </Box>

    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open6}
        onClose={handleCloseedit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Vieworders selectedProd2={selectedProd2} handleCloseedit={handleCloseedit}/>
        </Box>
      </Modal>
    </div>  

    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open7}
        onClose={handleClosedel}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style2}>
          <Orderdeletecard handleClosedel={handleClosedel} selectedProd2={selectedProd2} getOrders={getOrders} setGetOrders={setGetOrders} setCount2={setCount2}/>
        </Box>
      </Modal>
    </div>
    </div>
  )
}
