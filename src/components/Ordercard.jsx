import * as React from 'react';
import { useState,useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { Link, useNavigate } from 'react-router-dom'
import Grid from '@mui/material/Grid';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicCard({handleClose2,selproduct,handleBothClose}) {
  const nav=useNavigate()

  const [conforder,setConforder]=useState()
  const Details=(e)=>{
    setConforder({...conforder,[e.target.name]:e.target.value})
  }

  let initValue;
  if(localStorage.getItem("Orders")===null){
    initValue=[];
  }else{
    initValue=JSON.parse(localStorage.getItem("Orders"))
  }

  const [value2,setValue2]=useState(initValue)

  const handleConfirm= async(e)=>{
    e.preventDefault();
    const newID2=value2.length===0 ? 1:value2[value2.length-1].id2+1
    let user2={
      id2:newID2,...conforder,
      product:selproduct.product,
      totalAmount:selproduct.price * quantity,
      quantity:quantity
    }
    const newValue2=[...value2,user2]
    setValue2(newValue2)

    localStorage.setItem("Orders",JSON.stringify(newValue2))
    // console.log(conforder);
    handleClose()
    handleBothClose()
    nav('/products')

  }

 //to calculate quantity
  const [quantity,setQuantity]=useState(1)

  const handleQuantityChange = (event) => {
    const newQuantity = event.target.value;
    setQuantity(newQuantity);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Card sx={{ minWidth: 275 }} variant='contained'>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <h3>ORDER</h3>
          </Typography>
          <Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <img src={selproduct.image} alt="Product" style={{width:200}}/>
              </Grid>
              <Grid item xs={6}>
                <label>Product:</label>
                <h4>{selproduct.product}</h4>
              </Grid>
              <Grid item xs={6}>
                <label>Price:</label>
                <h4>{selproduct.price}</h4>
              </Grid>
              <Grid item xs={6} style={{display:'grid',alignItems:'center'}}>
                <label>Quantity:</label>
                <TextField
                  style={{ width: 80 }}
                  size='small'
                  // label="Quantity"
                  type="number"
                  InputProps={{ inputProps: { min: 1 } }}
                  value={quantity}
                  onChange={handleQuantityChange}
                />
              </Grid>
              <Grid item xs={6}>
                <label>Total:</label>
                <h4>{selproduct.price * quantity}</h4>
              </Grid>
            </Grid>
              
          </Typography>
        </CardContent>
        {selproduct.status === 'Available' ? (
          <Button variant='contained' onClick={handleOpen}>Purchase</Button>
        ):(
          <Button variant='contained' disabled>Purchase (Not Available)</Button>
        )}
          
      </Card>

      <div>
        {/* <Button >Open modal</Button> */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h4" component="h2">
              CONFIRM ORDER!!!
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gridGap:'8px',alignItems:'center'}}>
                <label><u><b>PRODUCT:</b></u>  {selproduct.product}</label>
                <label><u><b>TOTAL AMOUNT:</b></u>  {selproduct.price * quantity}</label>
                <h6>Customer name:</h6>
                <TextField style={{marginLeft:-40}} name='name' size='small' variant="outlined" onChange={(e)=>Details(e)}/>
                <h6>Phone:</h6>
                <TextField style={{marginLeft:-40}} name='phone' type='number' size='small' variant="outlined" onChange={(e)=>Details(e)}/>
                <h6>Address:</h6>
                <TextField style={{marginLeft:-40}} name='address' size='small' variant="outlined" onChange={(e)=>Details(e)}/>
              </div> <br />
              
              <h5><b>Do you want to confirm your order for {selproduct.product} ?</b></h5>
            </Typography>
            <div style={{display:'flex',justifyContent:'end' ,gap:5}}>
              <Button type='submit' variant='contained' color='success' onClick={handleConfirm}><CheckIcon/>Confirm</Button>
              <Button variant='contained' color='error' onClick={handleClose}><ClearIcon/>Cancel</Button>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}