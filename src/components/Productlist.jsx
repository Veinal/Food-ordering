import React from 'react'
import { useState,useEffect } from 'react';
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
import { Link,useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Productdeletecard from './Productdeletecard'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const style = {
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

const drawerWidth = 200;


export default function Productlist() {
  const navigate=useNavigate()

  //for input form and handlesubmitting
  const [form,setFrom] = useState()
  const Input=(e)=>{
    // console.log({[e.target.name]:e.target.value});
    setFrom({...form,[e.target.name]:e.target.value})
  }
  // console.log(form,'form');

  let initialValue;
  if(localStorage.getItem("Food")===null){
    initialValue=[]
  }else{
    initialValue=JSON.parse(localStorage.getItem("Food"))
  }
  const [value,setValue]=useState(initialValue)

  const handleSubmit= async(e)=>{
    e.preventDefault();
    const newId=value.length===0? 1:value[value.length-1].id+1
    let user={
      id:newId,status:'Available',...form
    }
    const newValue=[...value,user]
    setValue(newValue)

    localStorage.setItem("Food",JSON.stringify(newValue))
    console.log(newValue);

    handleClose()
    navigate('/productlist')
  }

  //for displaying values in table

  const [get,setGet]= useState([])
  const [count,setCount] = useState(true)

  useEffect(()=>{
    const set=JSON.parse(localStorage.getItem("Food"))
    if(set){
      setGet(set)
    }
  },[value])
  // console.log(get,"get");

  //Add product
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //Edit option
  const [open4, setOpen4] = React.useState(false);
  const handleOpenedit = () => setOpen4(true);
  const handleCloseedit = () => setOpen4(false);

  //Delete option
  const [open5, setOpen5] = React.useState(false);
  const [selectedProd,setSelectedProd]=useState('')

  const handleOpendel = (i) =>{ 
    setOpen5(true);
    setSelectedProd(i)
  }
  const handleClosedel = () => setOpen5(false);

  //to get category
  const [loccat,setLoccat]=useState([])

  useEffect(()=>{
    const locset=JSON.parse(localStorage.getItem("Category"))
    setLoccat(locset)
  },[])

  // console.log(loccat,'lc');

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} >
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
        
        <Button variant='contained'  onClick={handleOpen}><AddIcon/>ADD PRODUCT</Button> <br /><br />

        <Typography >
        <table className="table align-middle mb-0 bg-white">
          <thead className="bg-light">
            <tr>
              <th>Sl no.</th>
              <th>Product</th>
              <th>Image</th>
              <th>Price</th>
              <th>Status</th>
              <th>Category</th>
              <th>Desc</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {get?.map((i,index)=>{
              return(
                <>
                  <tr>
                    <td>{index+1}</td>
                    <td>{i.product}</td>
                    <td><img src={i.image} style={{width:50}}></img></td>
                    <td>{i.price}</td>
                    <td>{i.status}</td>
                    <td>{i.category}</td>
                    <td>{i.description}</td>
                    <td style={{display:'flex',gap:3}}>
                      <Link to={`/editprolist/${i.id}`}><Button variant='contained' color='primary'><EditIcon fontSize='small'/>Edit</Button></Link>
                      <Button onClick={()=>handleOpendel(i)} variant='contained' color='error'><DeleteIcon fontSize='small'/>Delete</Button>
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
      <Button >Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div style={{display:'grid',justifyContent:'center',alignItems:"center",gap:'10px'}}>
          <h1><b><u>ADD PRODUCT</u></b></h1>
          <TextField name='product' label="Product name" variant="outlined" onChange={(e)=>Input(e)}/>
          <TextField name='image' label="Image" variant="outlined" onChange={(e)=>Input(e)}/>
          <TextField name='price' label="Price" type="number" onChange={(e)=>Input(e)}/>
          {/* <TextField name='status' label="Status" variant="outlined" onChange={(e)=>Input(e)}/> */}
          {/* <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name='status'
                // value={age}
                label="Age"
                onChange={(e)=>Input(e)}
              >
                <MenuItem value={'Available'}>Available</MenuItem>
                <MenuItem value={'Not Available'}>Not Available</MenuItem>
              </Select>
            </FormControl>
          </Box> */}
          {/* <TextField name='category' label="Category" variant="outlined" onChange={(e)=>Input(e)}/> */}
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name='category'
                // value={age}
                label="Category"
                onChange={(e)=>Input(e)}
              >
                {loccat?.map((category)=>{
                  return(<MenuItem value={category.category}>{category.category}</MenuItem>)
                })}
               
                
              </Select>
            </FormControl>
          </Box>
          <TextField name='description' label="Description" variant="outlined" multiline maxRows={4} onChange={(e)=>Input(e)}/>
          <Button variant='contained' color='secondary' onClick={handleSubmit}><AddIcon/>ADD</Button>
        </div>
        </Box>
      </Modal>
    </div>
      
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open4}
        onClose={handleCloseedit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          view
        </Box>
      </Modal>
    </div>  

    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open5}
        onClose={handleClosedel}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Productdeletecard handleClosedel={handleClosedel} selectedProd={selectedProd} get={get} setGet={setGet} setCount={setCount}/>
        </Box>
      </Modal>
    </div>

    </div>
  )
}
