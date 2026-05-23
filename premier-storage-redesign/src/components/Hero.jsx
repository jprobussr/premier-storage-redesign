import './Hero.css';

import React from 'react';

const Hero = () => {
  return (
    <section className="hero section" id="top">
      <div className="container">
        <div className="hero-content">
          <p className="eyebrow">Climate-Controlled Storage</p>
          <h1>Modern Storage Solutions in Murray, Kentucky</h1>
          <p className="hero-text">
            Secure, climate-controlled storage units with convenient access,
            flexible unit sizes, and local customer support.
          </p>
          <div className="hero-actions">
            <a href="#contact">Contact Us</a>
            <a href="#units">View Unit Sizes</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
