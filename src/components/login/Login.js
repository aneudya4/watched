/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { AuthFormsContext } from '../../appContext';
import './login.css';

const Login = ({ history }) => {
  const { auth, authDispatch } = useContext(AuthFormsContext);

  const showLogin = auth.showLogin ? 'show-login' : null;

  const handleOnClickCancel = () => {
    authDispatch({ type: 'HIDE_LOGIN' });
  };

  const handleLogin = () => {
    history.push('/auth/dashboard/media');
  };

  return (
    <div className={`login auth-form ${showLogin}`}>
      <span className="error">*LOGIN IS NOT SET UP YET*</span>
      <h4>Log In</h4>
      <form>
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
          <button onClick={handleLogin} className="btn" type="submit">
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
