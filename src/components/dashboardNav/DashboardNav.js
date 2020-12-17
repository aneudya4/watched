/* eslint-disable no-return-assign */
import React from 'react';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import './dashboardnav.css';

const DashboardNav = () => (
  <header className="light">
    <nav>
      <h1 className="logo">WATCHED</h1>
      <ul>
        <li>
          <NavLink to="/auth/dashboard">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/auth/dashboard/watchlist">Watch list</NavLink>
        </li>
        <li>
          <NavLink to="/auth/dashboard/favorites">Favorites</NavLink>
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

export default DashboardNav;
