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

const drawerWidth = 240;
// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function ClippedDrawer() {

  const [get2,setGet2]=useState([])
  const [search,setSearch] =useState('')
  const [categories, setCategories] = useState([]);


  useEffect(()=>{
    const set2=JSON.parse(localStorage.getItem("Food"))
    if(set2){
      setGet2(set2)
    }
  },[])

  // const filteredProducts = get2.filter((item) => {
  //   const productInfo = `${item.product} ${item.description} ${item.category}`.toLowerCase();
  //   return (
  //     productInfo.includes(search.toLowerCase()) &&
  //     (categories.length === 0 || categories.includes(item.category.toLowerCase()))
  //   );
  // });

  const filteredProducts = get2.filter((item) => {
    const productInfo = `${item.product} ${item.description} ${item.category}`.toLowerCase();
    return (
      productInfo.includes(search.toLowerCase()) &&
      (categories.length === 0 || (item.category && categories.includes(item.category.toLowerCase())))
    );
  });
  

  const handleCategoryChange = (e) => {
    const categoryName = e.target.name;
    setCategories((prevCategories) => {
      if (prevCategories.includes(categoryName)) {
        // If the category is already selected, remove it
        return prevCategories.filter((category) => category !== categoryName);
      } else {
        // If the category is not selected, add it
        return [...prevCategories, categoryName];
      }
    });
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
                  <FormControlLabel control={<Checkbox checked={categories.includes('category1')} onChange={handleCategoryChange} name="category1"/>} label="category1" />
                  <FormControlLabel control={<Checkbox checked={categories.includes('category2')} onChange={handleCategoryChange} name="category2"/>} label="category2" />
                  <FormControlLabel control={<Checkbox checked={categories.includes('category3')} onChange={handleCategoryChange} name="category3"/>} label="category3" />
                  <FormControlLabel control={<Checkbox checked={categories.includes('category4')} onChange={handleCategoryChange} name="category4"/>} label="category4" />
                  <FormControlLabel control={<Checkbox checked={categories.includes('category5')} onChange={handleCategoryChange} name="category5"/>} label="category5" />
                  <FormControlLabel control={<Checkbox checked={categories.includes('category6')} onChange={handleCategoryChange} name="category6"/>} label="category6" />
                  
                </FormGroup>
              </div>

            </Box>
          </Drawer>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            {/* <input type="search" name="" id="" placeholder='search'  /><SearchOutlinedIcon/> */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="input-group" style={{width:"50%"}}>
                <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" value={search} onChange={(e)=>setSearch(e.target.value)} />
                <button type="button" className="btn btn-primary">search</button>
              </div>
            </div>

            <Container sx={{ py: 3 }}>
              <div style={{display: 'grid',gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',gap: '1rem'}}>
              {filteredProducts?.map((item)=>{
                return(
                  <>
                    <Card sx={{ maxWidth: 345 }} key={item.product}>
                      <CardMedia
                        component="img"
                        alt="product"
                        height="140"
                        image={item.image}
                      />
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          <h3>{item.product}</h3>
                          <h3>{item.price}</h3>
                          <h3>{item.status}</h3>
                          <h3>{item.category}</h3>
                          <h3>{item.description}</h3>
                        </Typography>
                      </CardContent>
  
                      <CardActions>
                        <Button size="small">View</Button>
                        <Button size="small">Order</Button>
                      </CardActions>
                    </Card>
                  </>
                )
              })}
              
              </div>
            </Container>
            
          </Box>
        </Box>
    </div>
  );
}