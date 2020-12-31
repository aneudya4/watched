/* eslint-disable object-curly-newline */
/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-return-assign */
import React, { useRef, useState, useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthFormsContext } from '../../appContext';

// eslint-disable-next-line import/no-unresolved
import './NavBar.css';

const NavBar = () => {
  const headerRef = useRef(null);
  const [scroll, setScroll] = useState(false);

  const { auth, authDispatch } = useContext(AuthFormsContext);

  const changeBackground = () => {
    setScroll(window.scrollY >= 20);
  };

  // window.addEventListener('scroll', changeBackground);

  const handleClickRegister = () => {
    if (auth.showRegister) {
      authDispatch({ type: 'HIDE_REGISTER' });
    } else {
      authDispatch({ type: 'SHOW_REGISTER' });
    }
  };

  const handleClickLogin = () => {
    console.log('mmg');
    if (auth.showLogin) {
      authDispatch({ type: 'HIDE_LOGIN' });
    } else {
      authDispatch({ type: 'SHOW_LOGIN' });
    }
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      window.addEventListener('scroll', changeBackground);
    }

    return function cleanup() {
      mounted = false;
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  return (
    <header ref={headerRef} className={scroll ? 'light' : null}>
      <nav>
        <h1 className="logo">BINGE</h1>
        <ul>
          <li onClick={handleClickLogin}>Log In</li>
          <li onClick={handleClickRegister}>Register</li>
          <li>
            <NavLink to="/auth/dashboard/media">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/">Log Out</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
