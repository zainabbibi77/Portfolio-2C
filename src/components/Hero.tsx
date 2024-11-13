import React from 'react';
import Navbar from './Navbar';
import "../app/styles/hero.css" ; // Import the custom CSS file

const Hero = () => {
  return (
    <div id="hero"  className="hero-container"
    >
      <Navbar />
      <div className="hero-content">
        <div className='hidden lg:block'></div>

        <div className="hero-text">
          <div className="hero-main">
            <p>That's me,</p>
            <p>Zainab</p>
            <p>Bibi</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
