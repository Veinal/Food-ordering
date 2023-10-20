import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';



export default function MediaCard({selectedProd2,handleCloseedit}) {
    // console.log(seluser,11111)
    // console.log(props.seluser,111)
   
  return (
    <>
    <Card variant='contained' >
        {/* <img width={'200px'} src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" alt="" /> */}
        
      <CardContent>
        <Typography gutterBottom variant="h4" component="div" style={{marginBottom:25,display:'flex',justifyContent:'center'}}>
          <b><u>CUSTOMER DETAILS</u></b>
        </Typography>
        <Typography variant="body2" >
          <span style={{display:'flex',justifyContent:'center'}}><img src={selectedProd2.picture} alt="no image found" style={{width:140,borderRadius:'20px'}} /></span>
          <hr /> 
          <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:5}}>
            <h5><label><b><u>Name:</u></b></label>{selectedProd2.name}</h5>
            <h5><label><b><u>Phone:</u></b></label>{selectedProd2.phone}</h5>
            <h5><label><b><u>Address:</u></b></label>{selectedProd2.address}</h5>
            <h5><label><b><u>product:</u></b></label>{selectedProd2.product}</h5>
            <h5><label><b><u>Quantity:</u></b></label>{selectedProd2.quantity}</h5>
            <h5><label><b><u>amount:</u></b></label>{selectedProd2.totalAmount}</h5>
          </div>
        </Typography>
        <span style={{display:'flex',justifyContent:'center',alignItems:"center"}}><Button onClick={handleCloseedit} variant='contained' color='error'><CloseIcon/>Close</Button></span>

      </CardContent>
      
    </Card>

    
</>
  );
}
