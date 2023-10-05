import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'

export default function Router() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home/>} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}
