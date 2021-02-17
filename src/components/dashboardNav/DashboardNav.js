import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { logoutUser } from '../../redux/actions';

import './dashboardnav.css';

const DashboardNav = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <header className="light">
      <nav>
        <h1 className="logo">
          <NavLink to="/">BINGE</NavLink>
        </h1>
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
          <li onClick={handleLogout}>Log Out</li>
        </ul>
      </nav>
    </header>
  );
};

export default DashboardNav;
