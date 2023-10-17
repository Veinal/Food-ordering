import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function MediaCard({selectedProd2,handleCloseedit}) {
    // console.log(seluser,11111)
    // console.log(props.seluser,111)
   
  return (
    <>
    <Card variant='contained' >
        {/* <img width={'200px'} src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" alt="" /> */}
        
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{marginBottom:25}}>
          <b><u>CUSTOMER DETAILS</u></b>
        </Typography>
        <Typography variant="body2" >
          {/* <img src={selectedProd2.image} alt="no image found" style={{width:200}} /> */}
          <h4><label><b><u>Name:</u></b></label>{selectedProd2.name}</h4>
          <h4><label><b><u>Phone:</u></b></label>{selectedProd2.phone}</h4>
          <h4><label><b><u>Address:</u></b></label>{selectedProd2.address}</h4>
          <h4><label><b><u>product:</u></b></label>{selectedProd2.product}</h4>
          <h4><label><b><u>amount:</u></b></label>{selectedProd2.totalAmount}</h4>
          <Button onClick={handleCloseedit} variant='contained' color='inherit'>Close</Button>
        </Typography>
      </CardContent>
      
    </Card>

    
</>
  );
}
