import React, { useState,useEffect } from 'react'
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
// import { Button } from 'bootstrap';
import { Button } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';



const drawerWidth = 200;

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


export default function Categorylist() {
    const navigate=useNavigate()

    const [categ,setCateg]=useState()
    const Inp=(e)=>{
        setCateg({...categ,[e.target.name]:e.target.value})
    }

    let iniVal;
    if(localStorage.getItem("Category")===null){
        iniVal=[]
    }else{
        iniVal=JSON.parse(localStorage.getItem("Category"))
    }
    const [val2,setVal2]=useState(iniVal)

    const Addcat=async(e)=>{
        e.preventDefault();
        const nId =val2.length===0 ? 1: val2[val2.length-1].id+1
        let user3={
            id:nId,...categ
        }
        const newValue3=[...val2,user3]
        setVal2(newValue3)

        localStorage.setItem("Category",JSON.stringify(newValue3))

        handleClosecat1()
        navigate('/categorylist')
    }

    const [get5,setGet5]=useState([])
    const [count5,setCount5]=useState(1)

    useEffect(()=>{
        const set5=JSON.parse(localStorage.getItem("Category"))
        if(set5){
            setGet5(set5)
        }
        setCount5(prev=>prev+1)
    },[count5])

    //add
    const [opencat1, setOpencat1] = React.useState(false);
    const handleOpencat1 = () => setOpencat1(true);
    const handleClosecat1 = () => setOpencat1(false);


    //delete
    const [openDel, setOpenDel] = React.useState(false);
    const [selectedCat,setSelectedCat]=useState('')

    const handleOpenDel = (i) => {
        setOpenDel(true);
        setSelectedCat(i)
    }
    const handleCloseDel = () => setOpenDel(false);

    const Del=async(item)=>{
        const newValues=get5.filter((i)=>i.id!=item.id)
        console.log(newValues);
        setGet5(newValues)
        handleCloseDel()
        localStorage.setItem("Category",JSON.stringify(newValues))
    }

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
                    <ListItemText secondary='Product list'/>
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

                <Button variant='contained'  onClick={handleOpencat1}><AddIcon/>ADD CATEGORY</Button> <br /><br />
                
            <Typography paragraph>
            <table className="table align-middle mb-0 bg-white">
                <thead className="bg-light">
                <tr>
                    <th>Sl no.</th>
                    <th>Categories</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {get5?.map((i,index)=>{
                    return(
                    <>
                    <tr>
                        <td>{index+1}</td>
                        <td>{i.category}</td>

                        <td style={{display:'flex', gap:'6px'}}>  
                            <Button onClick={()=>handleOpenDel(i)}  variant='contained' color='error'><DeleteIcon fontSize='small'/>Delete</Button>
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

        {/* Add category */}
        <Modal
            open={opencat1}
            onClose={handleClosecat1}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <div>
                    <h3>ADD CATEGORY:</h3><br />
                    <TextField onChange={(e)=>Inp(e)} style={{width:300}} name='category' id="outlined-basic" label="Enter Category" variant="outlined" />   
                </div><br />
                <div style={{display:'flex',justifyContent:'center'}}>
                    <Button onClick={Addcat} variant='contained'><AddIcon/>ADD CATEGORY</Button>
                </div>
               
            </Box>
        </Modal>

        {/* Delete */}
        <Modal
        open={openDel}
        onClose={handleCloseDel}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
        <Card sx={{ minWidth: 275 }} variant='contained'>
            <CardContent>
            <Typography  color="text.secondary" gutterBottom>
                Do you want to delete {selectedCat.category} ?
            </Typography>

            </CardContent>
            <Button onClick={()=>Del(selectedCat)} variant='contained' color='error' >Delete</Button>
            <Button onClick={handleCloseDel} variant='contained' color='inherit' >Cancel</Button>
        </Card>
        </Box>
        </Modal>
    </div>
  )
}
