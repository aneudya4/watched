/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useCallback, useState } from 'react';
import { withRouter } from 'react-router-dom';
import firebaseApp from '../../firebase';
import { AuthFormsContext } from '../../appContext';
import config from '../config';

import './login.css';

const Login = ({ history }) => {
  const { auth, authDispatch } = useContext(AuthFormsContext);
  const [showError, setShowError] = useState(false);
  const showLogin = auth.showLogin ? 'show-login' : null;

  const handleOnClickCancel = () => {
    authDispatch({ type: 'HIDE_LOGIN' });
  };

  const handleRegisterClick = () => {
    authDispatch({ type: 'SHOW_REGISTER' });
  };

  const handleLogin = useCallback(
    async (e) => {
      e.preventDefault();
      const { email, password } = e.target.elements;
      try {
        await firebaseApp
          .auth()
          .signInWithEmailAndPassword(email.value, password.value)
          .then((userData) =>
            authDispatch({ type: 'LOG_IN_USER', payload: userData }),
          );
        setShowError(false);

        history.push('/auth/dashboard/media');
      } catch (error) {
        setShowError(true);
      }
    },
    [history],
  );

  const handleDemoLogIn = async () => {
    try {
      await firebaseApp
        .auth()
        .signInWithEmailAndPassword(
          config.DEMO_ACCOUNT_EMAIL,
          config.DEMO_ACCOUNT_PASSWORD,
        )
        .then((userData) =>
          authDispatch({ type: 'LOG_IN_USER', payload: userData }),
        );
      setShowError(false);

      history.push('/auth/dashboard/media');
    } catch (error) {
      setShowError(true);
    }
  };
  return (
    <div className={`login auth-form ${showLogin}`}>
      {showError && <p className="error">We could not find your account</p>}
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
        Dont have an account ?{' '}
        <span onClick={handleRegisterClick}>Register</span>
      </p>
    </div>
  );
};

export default withRouter(Login);
