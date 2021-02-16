import React from 'react';
import Hero from '../hero/Hero';
import About from '../about/About';
import Features from '../features/Features';
import Login from '../login/Login';
import Register from '../register/Register';
import Footer from '../footer/Footer';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Login />
      <Register />
      <Footer />
    </>
  );
};
export default HomePage;
