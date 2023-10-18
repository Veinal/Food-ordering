import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function BasicCard({get3,handleClose,selectedOrder,setGet3,setCount3}) {

    const CancelOrder=async(orders)=>{
        const canValue=get3.filter((i)=>i.id2!=orders.id2)
        setGet3(canValue)
        handleClose()
        localStorage.setItem("Orders",JSON.stringify(canValue))
        // setCount3((prev)=>!prev)

    }

  return (
    <Card variant='contained' sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Do you want to cancel the order for {selectedOrder.product} ?
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button variant='contained' color='error' onClick={()=>CancelOrder(selectedOrder)}>Cancel Order</Button>
        <Button variant='contained' color='inherit'>Close</Button>
      </CardActions>
    </Card>
  );
}