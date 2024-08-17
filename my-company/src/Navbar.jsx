import React from 'react'
import { Link , NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <header >
        <nav style={{ display:'flex' , fontSize:'30px', width:"70%", justifyContent:"space-between"}}>
            <div>
                <Link to='/' style={{textDecoration:'none', paddingLeft:"100px"}}> Home </Link>
            </div>
            <div>
                <Link to='about' style={{textDecoration:'none', paddingLeft:"100px"}} > About </Link>
            </div><div>
                <Link to='services' style={{textDecoration:'none', paddingLeft:"100px"}} > Services </Link>
            </div><div>
                <Link to='contact' style={{textDecoration:'none', paddingLeft:"100px", paddingRight:"100px"}}> Contact </Link>
            </div>
        </nav>
    </header>
  )
}

export default Navbar