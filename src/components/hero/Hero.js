import React from 'react';
import './hero.css';
import { showHideAuthModal } from '../../redux/actions/';
import { useDispatch, useSelector } from 'react-redux';

const Hero = () => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleClickLogin = () => {
    dispatch(showHideAuthModal('login'));
  };
  const handleClickRegister = () => {
    dispatch(showHideAuthModal('register'));
  };

  const showLoginClass = auth.showLogin ? 'selected-auth' : null;
  const showRegister = auth.showRegister ? 'selected-auth' : null;

  return (
    <div className="hero">
      <div className="app-info">
        <p>ONE APP FOR ALL YOUR ENTERTAIMENT NEEDS .</p>
        <h2>
          The
          <span> BEST </span>
          MULTIMEDIA BROWSER
        </h2>
        {!auth.isAuth && (
          <>
            <button className={showLoginClass} onClick={handleClickLogin}>
              Log In
            </button>
            <button className={showRegister} onClick={handleClickRegister}>
              Register
            </button>
          </>
        )}
      </div>
    </div>
  );
};
export default Hero;
