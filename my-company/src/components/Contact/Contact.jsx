import React from 'react'
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div style={{ padding: '20px', display:'flex', flexDirection:'column',alignItems:'center' }}>
      <h1  style={{padding:"10px", color:'darkred', fontSize:"2em"}}>Contact Us</h1>
      <form onSubmit={handleSubmit} style={{ padding: '20px', display:'flex', flexDirection:'column',alignItems:'center' }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{ display: 'block', margin: '10px 0' }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{ display: 'block', margin: '10px 0' }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{ display: 'block', margin: '10px 0' }}
        />
        <button type="submit" style={{borderRadius:"20px",width:"20em", color:"darkred",height:"2em"}}>Send Message</button>
      </form>
    </div>
  );
}

export default Contact;