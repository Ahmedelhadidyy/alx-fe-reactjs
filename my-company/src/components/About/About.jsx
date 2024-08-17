import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function About() {
    return (
      <div style={{ padding: '20px', display:'flex', flexDirection:'column',alignItems:'center' }}>
        <h1 style={{padding:"10px", color:'darkred', fontSize:"2em"}}>About Us</h1>
        <p style={{padding:"10px", fontSize:"1.4em"}}>Our company has been providing top-notch services since 1990. We specialize in various fields including technology, marketing, and consultancy.</p>
      </div>
    );
  }

  export default About;