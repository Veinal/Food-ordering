import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function BasicCard({handleClosedel,selectedProd2,getOrders,setGetOrders,setCount2}) {

    const Del=async(item)=>{
        const newValues2=getOrders.filter((i)=>i.id2!=item.id2)
        console.log(newValues2);
        setGetOrders(newValues2)
        handleClosedel()
        localStorage.setItem("Orders",JSON.stringify(newValues2))
        console.log(item,'item');
    }
console.log(selectedProd2,'sel');
  return (
    <Card sx={{ minWidth: 275 }} variant='contained'>
      <CardContent>
        <Typography  color="text.secondary" gutterBottom>
          Do you want to delete {selectedProd2.product} ?
        </Typography>
        
      </CardContent>
        <Button onClick={()=>Del(selectedProd2)} variant='contained' color='error' >Delete</Button>
        <Button onClick={handleClosedel} variant='contained' color='inherit' >Cancel</Button>
    </Card>
  );
}