import React from 'react';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import './NavBar.css';

const NavBar = () => (
  <header>
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
          <NavLink to="/auth/dashboard">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/">Log Out</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default NavBar;
