import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import Login from './Login'
import Adminlogin from './Adminlogin'
import Products from './Products'
import Orders from './Orders'
import Adminpage from './Adminpage'
import Productlist from './Productlist'
import Orderlist from './Orderlist'
import Footer from './Footer'

export default function Router() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/navbar' element={<Navbar/>} />
            <Route exact path='/login' element={<Login/>} />
            <Route exact path='/adminlogin' element={<Adminlogin/>} />
            <Route exact path='/products' element={<Products/>} />
            <Route exact path='/orders' element={<Orders/>} />
            <Route exact path='/adminpage' element={<Adminpage/>} />
            <Route exact path='/productlist' element={<Productlist/>} />
            <Route exact path='/orderlist' element={<Orderlist/>} />
            <Route exact path='/footer' element={<Footer/>} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}
