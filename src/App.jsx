import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'
import Home from './Pages/Home/Home.jsx'
import Services from './Pages/OurServices/Services.jsx'
import Aboutus from './Pages/AboutUs/AboutUs.jsx'
import Contactus from './Pages/ContactUs/ContactUs.jsx'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar1 from './Components/Navbar1.jsx';

import './App.css'

function App() {

  return (
    <>
    
      <Navbar1/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contactus />} />

      </Routes>
      <Footer/>
    

    </>
  )
}

export default App
