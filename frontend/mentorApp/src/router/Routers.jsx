import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import FindMentor from "../pages/findMentor"
import BecomeMentor from '../pages/becomeMentor'

function Routers() {
  return (
    <Routes>
    {/* <Route path='/' element={<Navigate to='/'/>} /> */}
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='findMentor' element={<FindMentor />} />
    <Route path='/becomeMentor' element={<BecomeMentor />} />
   </Routes>
  )
}

export default Routers