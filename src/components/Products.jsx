import * as React from 'react';
import { useState,useEffect } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
// import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Navbar from './Navbar';
import Viewcard from './Viewcard'
import Ordercard from './Ordercard'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';

//checkbox 
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 3,
};

const drawerWidth = 240;
// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function ClippedDrawer() {

  const [get2,setGet2]=useState([])
  // const [search,setSearch] =useState('')
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  //modal states
  const [open, setOpen] = React.useState(false);
  const [selectedProduct,setSelectedProduct] =useState('')

  const handleOpen = (item) => {
    setOpen(true);
    setSelectedProduct(item)
  }

  const handleClose = () => setOpen(false);

  //to close both the modals
  const handleBothClose=()=>{
    setOpen(false)
    setOpen2(false)
  }

  useEffect(()=>{
    const set2=JSON.parse(localStorage.getItem("Food"))
    if(set2){
      setGet2(set2)
    }
  
  },[])

  useEffect(()=>{
    const setCat=JSON.parse(localStorage.getItem("Category"))
    if(setCat){
      setCategories(setCat)
    }
  },[])
console.log(get2,'get');
  
  
  // console.log(filteredProducts.length,'pro');
  const handleCategoryChange = (e) => {
    const categoryName = e;
    setSelectedCategories((prevCategories) => {
      if (prevCategories.includes(categoryName)) {
        // If the category is already selected, remove it
        return prevCategories.filter((category) => category !== categoryName);
      } else {
        // If the category is not selected, add it
        return [...prevCategories, categoryName];
      }
    });
  };
  
  //Order modal states
  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  //get categories from localstorage
  // const [getCategory,setGetCategory]=useState([])

  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [noResullt,setNoResult] = useState(false)

  const handleSearch = (e) => {
    const searchText = e.target.value.toLowerCase();
    setSearch(searchText);
  
    // Filter products based on the search text
    const filtered = get2.filter((item) =>
      // item.product.toLowerCase().includes(searchText)
      item.product && item.product.toLowerCase().includes(searchText)
    );
    setFilteredProducts(filtered);

    setNoResult(filtered.length === 0)
  };
  
  const filterProductsByCategory = () => {
    if (selectedCategories.length === 0) {
      return get2; // Return all products if no category is selected
    } else {
      // Filter products based on selected categories
      return get2.filter((item) => selectedCategories.includes(item.category));
    }
  };
  

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        {/* <CssBaseline /> */}
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          
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
            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
              <FormGroup>
                {/* <FormControlLabel control={<Checkbox defaultChecked />} label="Label" /> */}
                <Typography variant='h4'><b>Categories:</b></Typography>
                {categories.map((c) => {
                  return(
                    <>
                      <FormControlLabel
                        key={c.id}
                        control={
                          <Checkbox
                            checked={selectedCategories.includes(c.category)}
                            onChange={()=>handleCategoryChange(c.category)}
                            name={c.category}
                          />
                        }
                        label={c.category}
                      />
                    </>
                  )
                })}
              </FormGroup>
            </div>

          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          {/* <input type="search" name="" id="" placeholder='search'  /><SearchOutlinedIcon/> */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="input-group" style={{width:"50%"}}>
              <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon"  onChange={handleSearch} />
              <button type="button" className="btn btn-primary">search</button>
            </div>
          </div>

          <Container sx={{ py: 3 }}>
            <div style={{display: 'grid',gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',gap: '1rem'}}>
              {/* no results found */}
              {noResullt ? 
              (
                <Typography variant='h5' color='textSecondary' style={{marginLeft:'300px',width:200}}>
                  No results found
                </Typography>
              )
            :
              (search !== '' ? filteredProducts : filterProductsByCategory()).map((item) => {
                return(
                <>
                  <Card sx={{ maxWidth: 345 }} key={item.product} onClick={()=>handleOpen(item)}>
                    <CardMedia
                      component="img"
                      alt="product"
                      height="200"
                      image={item.image}
                    />
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        Product:<h5> {item.product}</h5>
                        Price:<h5> {item.price}</h5>
                        {/* <h5>{item.status}</h5>
                        <h5>{item.category}</h5> */}
                        Description:<h5> {item.description}</h5>
                      </Typography>
                    </CardContent>

                    <div style={{display:'flex',justifyContent:'center'}}>
                      <CardActions >
                        {/* <Button size="small" onClick={(i)=>handleOpen(item)}>View</Button> */}
                        {/* <Button  variant='contained' color='primary'>View</Button> */}
                        <Button onClick={()=> handleOpen2(item)} variant='contained' color='success'>Order</Button>
                      </CardActions>
                    </div>
                  </Card>
                </>
                )
              })}
            
            </div>
          </Container>
          
        </Box>
      </Box>


      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleBothClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Viewcard selproduct={selectedProduct} handleClose={handleClose} />
          
        </Box>
      </Modal>

      <Modal
        open={open2}
        onClose={handleBothClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Ordercard selproduct={selectedProduct} handleClose2={handleClose2} handleBothClose={handleBothClose} />
        </Box>
      </Modal>
    </div>
  );
}