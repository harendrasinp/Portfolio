import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css"
import { Navbar } from './component/Navbar'
import { Home } from './component/Home'
import { Contact } from './component/Contact'
import { AboutUs } from './component/AboutUs'
export const App = () => {
  return (
      <div className={"appContainer"}>
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
