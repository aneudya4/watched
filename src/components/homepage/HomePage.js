/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Hero from '../hero/Hero';
import About from '../about/About';
import Features from '../features/Features';
import Login from '../login/Login';
import Register from '../register/Register';

const HomePage = ({ history }) => (
  <>
    <Hero />
    <About />
    <Features />
    <Login />
    <Register />
  </>
);
export default HomePage;
