import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthFormsContext } from '../../appContext';
import firebaseApp from '../../firebase';
import './dashboardnav.css';

const DashboardNav = () => {
  const { authDispatch } = useContext(AuthFormsContext);

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
