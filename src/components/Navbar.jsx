import React from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import Logo from '../project-logo.png'

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <i className="fas fa-bars"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <a className="navbar-brand mt-2 mt-lg-0" href="#">
                <img
                src={Logo}
                height="35"
                alt="MDB Logo"
                loading="lazy"
                />
            </a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link to='/'><a className="nav-link" href="#">Home</a></Link>
                </li>
                <li className="nav-item">
                <Link to='/products'><a className="nav-link" href="#">Products</a></Link>
                </li>
                <li className="nav-item">
                <Link to='/orders'><a className="nav-link" href="#">Orders</a></Link>
                </li>
            </ul>
            </div>

            <div className="d-flex align-items-center">

                <Link to='login'><Button variant='contained' >login</Button></Link>

            </div>
        </div>
        </nav>
    </div>
  )
}
