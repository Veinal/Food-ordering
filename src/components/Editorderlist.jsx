import React, { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {Button} from '@mui/material'


export default function Editprolist() {

    const params=useParams()
    const navigate=useNavigate()

    let orderID=params.id2

    const [upd2,setUpd2]=useState([])
    const [disp2,setDisp2]=useState([])
    const [index2,setIndex2]=useState([])

    useEffect(()=>{
        const locget2=JSON.parse(localStorage.getItem("Orders"))
        setUpd2(locget2)

        let select2 =locget2.find((obj)=>obj.id2==orderID)
        setDisp2(select2)
        console.log(select2,'sel');

        const ProdIndex2=locget2.findIndex((e)=>e.id2==orderID)
        setIndex2(ProdIndex2)
    },[])

    const handleChange2=(e)=>{
        setDisp2({...disp2,[e.target.name]:e.target.value})
    }

    const handleSubmit2=async()=>{
        const updatedData2=[...upd2]
        updatedData2.splice(index2,1,disp2)
        localStorage.setItem("Orders",JSON.stringify(updatedData2))

        await navigate('/orderlist')
    }
  return (
    <div>
        <div align='center' style={{display:'inline-grid', gap: '10px',marginLeft:'40%' }}>
            <h1><b>UPDATE PRODUCT DETAILS</b></h1>
            <input type="text" name='name' onChange={(e)=>handleChange2(e)} value={disp2?.name}  placeholder='Enter your Name'/>
            <input type="number" name='phone' onChange={(e)=>handleChange2(e)} value={disp2?.phone}  placeholder='Enter your Phone'/>
            <input type="text" name='address' onChange={(e)=>handleChange2(e)} value={disp2?.address} placeholder='Enter your Address'/>
            <input type="text" name='product' onChange={(e)=>handleChange2(e)} value={disp2?.product} placeholder='Enter your product'/>
            <input type="text" name='totalAmount' onChange={(e)=>handleChange2(e)} value={disp2?.totalAmount} placeholder='Enter your Amount'/>
            {/* <input type="text" name='description' onChange={(e)=>handleChange2(e)} value={disp2?.description} placeholder='Enter your Password'/> */}
            <Button variant="contained" color='success' type='submit' onClick={handleSubmit2}>Submit</Button>
        </div>
    </div>
  )
}
