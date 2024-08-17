import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About/About'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import Navbar from './Navbar';

function App() {

  return (
    <>
      <Navbar />
      <h1>Hello World</h1>
      <Services />
      <Contact />
      <Home />
      <About />
    </>
  )
}

export default App
