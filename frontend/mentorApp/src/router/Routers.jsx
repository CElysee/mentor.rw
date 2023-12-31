import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import FindMentor from "../pages/findMentor"
import BecomeMentor from '../pages/becomeMentor'
import MentorProfile from '../pages/mentorProfile'
import SignUp from '../pages/signUp'
import SetUpMember from '../pages/setUpMember'

function Routers() {
  return (
    <Routes>
    {/* <Route path='/' element={<Navigate to='/'/>} /> */}
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/findMentor' element={<FindMentor />} />
    <Route path='/becomeMentor' element={<BecomeMentor />} />
    <Route path='/mentorProfile' element={<MentorProfile />} />
    <Route path='/sign-up' element={<SignUp />} />
    <Route path='/set-up-member' element={<SetUpMember />} />
   </Routes>
  )
}

export default Routers