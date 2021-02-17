import React, { useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import config from '../../config';
import {
  loginWithEmailAndPassword,
  showHideAuthModal,
} from '../../redux/actions/';
import './login.css';

const Login = ({ history }) => {
  const { auth, errors } = useSelector((state) => state);
  const showLogin = auth.showLogin ? 'show-login' : null;
  const dispatch = useDispatch();
  const handleOnClickCancel = () => {
    dispatch(showHideAuthModal('login'));
  };

  const handleRegisterClick = () => {
    dispatch(showHideAuthModal('register'));
  };

  const handleLogin = useCallback(
    async (e) => {
      e.preventDefault();
      const { email, password } = e.target.elements;
      dispatch(loginWithEmailAndPassword(email.value, password.value, history));
    },
    [dispatch, history],
  );

  const handleDemoLogIn = () => {
    dispatch(
      loginWithEmailAndPassword(
        config.DEMO_ACCOUNT_EMAIL,
        config.DEMO_ACCOUNT_PASSWORD,
        history,
      ),
    );
  };
  return (
    <div className={`login auth-form ${showLogin}`}>
      {errors.errorMsg === 'auth/wrong-password' && (
        <p className="error">Your password is invalid, please try again</p>
      )}
      {errors.errorMsg === 'auth/user-not-found' && (
        <p className="error">That Binge account doesn't exist.</p>
      )}
      <h4>Log In</h4>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">
          <i className="fas fa-envelope" />
          Email address :
        </label>
        <input id="email" type="email" />

        <label htmlFor="password">
          <i className="fas fa-envelope" />
          Password :
        </label>
        <input id="password" type="password" />

        <div className="auth-btns">
          <button className="btn primary" type="submit">
            Log In
          </button>

          <button onClick={handleOnClickCancel} className="btn" type="button">
            Cancel
          </button>

          <span onClick={handleDemoLogIn} className="btn primary">
            Demo
          </span>
        </div>
      </form>
      <p>
        Dont have an account ?
        <span onClick={handleRegisterClick}>Register</span>
      </p>
    </div>
  );
};

export default withRouter(Login);
