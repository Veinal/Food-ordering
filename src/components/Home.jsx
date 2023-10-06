import React from 'react'
// import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Image01 from '../image01.jpg'

export default function Home() {
  return (
    <div>
      <Navbar/>
      {/* <Link to='login'><Button>login</Button></Link> */}
      <header>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarExample01"
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarExample01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item active">
                <a className="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}

      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage: `url(${Image01})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh", // Set the height to 100% of the viewport height
          marginTop: "0",   // Remove the top margin
          opacity:0.9
        }}
        
      >
        <div className="mask" style={{backgroundColor: "rgba(0, 0, 0, 0.6);"}}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3 text-black font-weight-bold" style={{fontSize:"60px"}}>ONLINE FOOD ORDERING</h1>
              <h4 className="mb-3 text-black ">"Savor the Moment: Order, Eat, Repeat."</h4>
              <Link to='/products'>
                <a className="btn btn-black btn-lg text-white " href="#!" role="button"
                >ORDER NOW!!</a
                >
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
    </div>
  )
}
