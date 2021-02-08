import React, { useRef, useState, useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthFormsContext } from '../../appContext';
import './NavBar.css';

const NavBar = () => {
  const headerRef = useRef(null);
  const [scroll, setScroll] = useState(false);

  const { auth, authDispatch } = useContext(AuthFormsContext);

  const changeBackground = () => {
    setScroll(window.scrollY >= 20);
  };

  const handleClickRegister = () => {
    if (auth.showRegister) {
      authDispatch({ type: 'HIDE_REGISTER' });
    } else {
      authDispatch({ type: 'SHOW_REGISTER' });
    }
  };

  const handleClickLogin = () => {
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

  const renderNavigation = () => {
    if (auth.isAuth) {
      return (
        <>
          <li>
            <NavLink to="/auth/dashboard/media">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/">Log Out</NavLink>
          </li>
        </>
      );
    }
    return (
      <>
        <li onClick={handleClickLogin}>Log In</li>
        <li onClick={handleClickRegister}>Register</li>
      </>
    );
  };

  return (
    <header ref={headerRef} className={scroll ? 'light' : null}>
      <nav>
        <h1 className="logo">BINGE</h1>
        <ul>{renderNavigation()}</ul>
      </nav>
    </header>
  );
};

export default NavBar;
