import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function BasicCard({handleClosedel,selectedProd,get,setGet,setCount}) {

    const Del=async(item)=>{
        const newValues=get.filter((i)=>i.id!=item.id)
        console.log(newValues);
        setGet(newValues)
        handleClosedel()
        localStorage.setItem("Food",JSON.stringify(newValues))
    }

  return (
    <Card sx={{ minWidth: 275 }} variant='contained'>
      <CardContent>
        <Typography  color="text.secondary" gutterBottom>
          Do you want to delete {selectedProd.product} ?
        </Typography>
        
      </CardContent>
        <Button onClick={()=>Del(selectedProd)} variant='contained' color='error' >Delete</Button>
        <Button onClick={handleClosedel} variant='contained' color='inherit' >Cancel</Button>
    </Card>
  );
}