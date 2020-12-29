/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable no-return-assign */
import React from 'react';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import './dashboardnav.css';

const DashboardNav = () => (
  <header className="light">
    <nav>
      <h1 className="logo">BINGE</h1>
      <ul>
        <li>
          <NavLink activeClassName="selected" to="/auth/dashboard/search">
            Search
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" to="/auth/dashboard/media">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="selected" to="/auth/dashboard/watchlist">
            Watch list
          </NavLink>
        </li>

        <li>
          <NavLink to="/">Log Out</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default DashboardNav;
