import React from 'react'

const Footer = () => {
    return (
      <footer style={{ backgroundColor: '#f1f1f1', padding: '20px 0', textAlign: 'center'}}>
        <p>
          &copy; {new Date().getFullYear()} Ahmed El Hadidy. All rights reserved. | Built with love and dedication.
        </p>
      </footer>
    );
  };
  

export default Footer