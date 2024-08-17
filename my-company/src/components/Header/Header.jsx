import React from 'react'
import Navbar from '../../Navbar'
import ImageComponent from '../Img/Img'

const Header = () => {
  return (
    <div style={{display:"flex", justifyContent:"space-between",width:'100%', height:'10em',backgroundColor:'darkgray', paddingTop:"20px", alignItems:"center"}}>
    <ImageComponent  />
    <Navbar />
    
    </div>
    
    
  )
}

export default Header