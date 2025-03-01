import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css";
import "aos/dist/aos.css"
import Aos from 'aos'
import { Navbar } from './component/Navbar'
import { Home } from './component/Home'
import { Contact } from './component/Contact'
import { AboutUs } from './component/AboutUs'
export const App = () => {
  useEffect(()=>{
    Aos.init({
      duration:2000,
      offset:250,
      easing:"ease-in-out",
    });
  },[]);
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
