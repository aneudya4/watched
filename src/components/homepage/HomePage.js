import React from 'react';
import Hero from '../hero/Hero';
import About from '../about/About';
import Features from '../features/Features';
import Login from '../login/Login';
import Register from '../register/Register';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Login />
      <Register />
    </>
  );
};
export default HomePage;
