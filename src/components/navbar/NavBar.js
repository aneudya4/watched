/* eslint-disable no-return-assign */
import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import './NavBar.css';

const NavBar = () => {
  const headerRef = useRef(null);
  const [scroll, setScroll] = useState(false);

  const changeBackground = () => {
    setScroll(window.scrollY >= 20);
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <header ref={headerRef} className={scroll ? 'light' : null}>
      <nav>
        <h1 className="logo">WATCHED</h1>
        <ul>
          <li>
            <NavLink to="/login">Log in</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
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
