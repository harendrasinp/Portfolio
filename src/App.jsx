import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './component/Navbar'
import { Home } from './component/Home'
import { Contact } from './component/Contact'
import { AboutUs } from './component/AboutUs'
export const App = () => {
  useEffect(()=>{
  },[]);
  return (
      <div className="min-h-screen bg-[url('../public/background.jpg')] bg-center bg-cover flex flex-col gap-5">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/aboutUs' element={<AboutUs />} />
          </Routes>
        </BrowserRouter>
      </div>
  )
}
