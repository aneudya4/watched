import React, { useRef, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import { useDispatch, useSelector } from 'react-redux';
import { showHideAuthModal } from '../../redux/actions/';

const NavBar = () => {
  const headerRef = useRef(null);
  const [scroll, setScroll] = useState(false);
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const changeBackground = () => {
    setScroll(window.scrollY >= 20);
  };

  const handleClickRegister = () => {
    dispatch(showHideAuthModal('register'));
  };

  const handleClickLogin = () => {
    dispatch(showHideAuthModal('login'));
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
