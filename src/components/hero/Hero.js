/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import React, { useContext } from 'react';
import { AuthFormsContext } from '../../appContext';
import './hero.css';

const Hero = () => {
  const { auth, authDispatch } = useContext(AuthFormsContext);

  const handleClickLogin = () => {
    authDispatch({ type: 'SHOW_LOGIN' });
  };
  const handleClickRegister = () => {
    authDispatch({ type: 'SHOW_REGISTER' });
  };
  return (
    <div className="hero">
      <div className="app-info">
        <p>ONE APP FOR ALL YOUR ENTERTAIMENT NEEDS .</p>
        <h2>
          The
          <span> BEST </span>
          MULTIMEDIA BROWSER
        </h2>
        <button onClick={handleClickLogin}>Log In</button>
        <button onClick={handleClickRegister}>Register</button>
      </div>
    </div>
  );
};
export default Hero;
