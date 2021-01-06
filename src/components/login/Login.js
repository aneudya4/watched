/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import firebaseApp from '../../firebase';
import { AuthFormsContext } from '../../appContext';
import './login.css';

const Login = ({ history }) => {
  const { auth, authDispatch } = useContext(AuthFormsContext);

  const showLogin = auth.showLogin ? 'show-login' : null;

  const handleOnClickCancel = () => {
    authDispatch({ type: 'HIDE_LOGIN' });
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

        history.push('/auth/dashboard/media');
      } catch (error) {
        console.log(error);
      }
    },
    [history],
  );
  return (
    <div className={`login auth-form ${showLogin}`}>
      <span className="error">*LOGIN IS NOT SET UP YET*</span>
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
          <button className="btn" type="submit">
            Log In
          </button>
          <button onClick={handleOnClickCancel} className="btn" type="button">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default withRouter(Login);
