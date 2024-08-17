import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Services() {
    return (
      <div style={{ padding: '20px', display:'flex', flexDirection:'column',alignItems:'center' }}>
        <h1 style={{padding:"10px", color:'darkred', fontSize:"2em"}}>Our Services</h1>
        <ul style={{padding:"10px", fontSize:"1.4em"}}>
          <li>Technology Consulting</li>
          <li>Market Analysis</li>
          <li>Product Development</li>
        </ul>
      </div>
    );
  }

  export default Services;