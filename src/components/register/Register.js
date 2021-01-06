/* eslint-disable react/prop-types */
/* eslint-disable no-unreachable */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';

import { AuthFormsContext } from '../../appContext';

import firebaseApp from '../../firebase';

const Register = ({ history }) => {
  const { auth, authDispatch } = useContext(AuthFormsContext);

  const showRegister = auth.showRegister ? 'show-register' : null;

  const handleOnClickCancel = () => {
    authDispatch({ type: 'HIDE_REGISTER' });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;
    console.log(email.value, password.value);
    try {
      await firebaseApp
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then((result) => {
          result.user.updateProfile({
            displayName: name.value,
          });
          authDispatch({ type: 'REGISTER_USER', payload: result });
        });

      history.push('/auth/dashboard/media');
    } catch (error) {
      console.log(error);
    }
  };
  console.log(auth);
  return (
    <div className={`register auth-form  ${showRegister}`}>
      <span className="error">*Registrations not set up yet*</span>
      <h4>REGISTER</h4>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="John Doe" />
        <label htmlFor="email-register">Email:</label>
        <input
          type="email"
          id="email-register"
          name="email"
          placeholder="JohnDoe@email.com"
        />

        <label htmlFor="password-register">Password:</label>
        <input type="password" id="password-register" name="password" />

        <div className="auth-btns">
          <button className="btn" type="submit">
            Register
          </button>
          <button onClick={handleOnClickCancel} className="btn" type="button">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
export default withRouter(Register);
