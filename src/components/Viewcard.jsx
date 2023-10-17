import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

export default function BasicCard({selproduct,handleClose}) {
  return (
    <Card variant='contained' sx={{ minWidth: 450 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <h3>Product Details</h3>
        </Typography>
        <Box >
            <img src={selproduct.image} alt="." style={{width:200}}/>
            <h5><label ><b>Product: </b></label> {selproduct.product}</h5>
            <h5><label ><b>Price: </b></label> {selproduct.price}</h5>
            <h5 style={{display:'flex',alignItems:'center'}}><label ><b>Status: </b></label> 
              <Stack direction="row" spacing={1}>
                {selproduct.status === 'Available' ? 
                  (<Chip label="Available" color="success" />)
                :
                  (<Chip label="Not available" color="error" />)
                }                  
              </Stack>
            </h5>
            <h5><label ><b>Category: </b></label> {selproduct.category}</h5>
            <h5><label ><b>Description: </b></label> {selproduct.description}</h5>
        </Box>
        
      </CardContent>
      
      <div style={{display:'flex',justifyContent:'center'}}>
        <Button onClick={handleClose} variant='contained' color='error'><CloseIcon/>Close</Button>
      </div>
     
    </Card>
  );
}