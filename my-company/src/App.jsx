import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createBrowserRouter , createRoutesFromElements, RouterProvider } from 'react-router-dom';
import About from './components/About/About'
import Services from './components/Services/Services'
import Contact from './Components/Contact'
import Home from './components/Home/Home'
import Navbar from './Components/Navbar';
import ReloadPage from './ReloadPage';
import Layout from './Layout';
import ImageComponent from './Components/Img/Img';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='' element={<ImageComponent />} />
      <Route path='about' element={<About />} />
      <Route path='services' element={<Services />} />
      <Route path='contact' element={<Contact />} /> 
    </Route>
  )
)


function App() {

  return (
    <>
    {/* < ReloadPage /> */}
    <RouterProvider router={router}/>
    </>
  )
}

export default App
