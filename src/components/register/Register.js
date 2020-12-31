/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import { AuthFormsContext } from '../../appContext';

const Register = () => {
  const { auth, authDispatch } = useContext(AuthFormsContext);

  const showRegister = auth.showRegister ? 'show-register' : null;
  return (
    <div className={`register auth-form  ${showRegister}`}>
      <span className="error">*Registrations not set up yet*</span>
      <h4>REGISTER</h4>
      <form>
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
          <button className="btn" type="button">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
export default Register;
