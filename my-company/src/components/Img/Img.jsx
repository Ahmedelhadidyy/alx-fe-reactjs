import React from 'react';
import myImage from './imageName.png';
import { Link , NavLink } from 'react-router-dom'

const ImageComponent = () => {
  return (
    <div>
    <Link to='/' >
      <img src={myImage} alt="Description of image" style={{width:"150px", height:"80px", paddingLeft:"100px"}}/>
    </Link>  
    </div>
  );
};

export default ImageComponent;