// src/components/Logo.js
import React from 'react';
import logo from './image/wp.jpg'; // Import your logo image here

const Logo = () => {
    return (
        <img
            src={logo}
            alt='Logo'
            height='30' // Adjust the height as needed
            className='d-inline-block align-top'
        />
    );
};

export default Logo;
