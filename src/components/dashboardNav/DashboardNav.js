/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable no-return-assign */
import React, { useContext } from 'react';

import { NavLink } from 'react-router-dom';
import { AuthFormsContext } from '../../appContext';

import firebaseApp from '../../firebase';
// eslint-disable-next-line import/no-unresolved
import './dashboardnav.css';

const DashboardNav = () => {
  const { auth, authDispatch } = useContext(AuthFormsContext);

  const handleLogout = () => {
    firebaseApp
      .auth()
      .signOut()
      .then(() => {
        authDispatch({ type: 'LOG_OUT_USER' });
      });
  };
  return (
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

          <li onClick={handleLogout}>Log Out</li>
        </ul>
      </nav>
    </header>
  );
};

export default DashboardNav;
