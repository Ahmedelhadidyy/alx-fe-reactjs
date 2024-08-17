import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Home() {
    return (
      <div style={{ padding: '20px', display:'flex', flexDirection:'column',alignItems:'center' }}>
        <h1 style={{padding:"10px", color:'darkred', fontSize:"2em"}}>Welcome to Our Company</h1>
        <p style={{padding:"10px", fontSize:"1.4em"}}>We are dedicated to delivering excellence in all our services.</p>
      </div>
    );
  }

  export default Home;