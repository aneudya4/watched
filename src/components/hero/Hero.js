import React from 'react';
import { Link } from 'react-router-dom';
import './hero.css';

const Hero = () => (
  <div className="hero">
    <div className="app-info">
      <p>ONE APP FOR ALL YOUR ENTERTAIMENT NEEDS .</p>
      <h2>
        The
        <span> BEST </span>
        MULTIMEDIA BROWSER
      </h2>
      <Link to="/login">Log In</Link>
      <Link to="/register">Register</Link>
    </div>
  </div>
);
export default Hero;
