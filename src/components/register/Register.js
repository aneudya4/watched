import React from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { showHideAuthModal, registerUser } from '../../redux/actions/';
const Register = ({ history }) => {
  const { auth, errors } = useSelector((state) => state);
  const dispatch = useDispatch();
  const showRegister = auth.showRegister ? 'show-register' : null;

  const handleOnClickCancel = () => {
    dispatch(showHideAuthModal('register'));
  };
  const handleOnClickLogin = () => {
    dispatch(showHideAuthModal('login'));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;
    dispatch(registerUser(name.value, email.value, password.value, history));
  };

  return (
    <div className={`register auth-form  ${showRegister}`}>
      <h4>REGISTER</h4>

      {errors.errorMsg && <p className="error">Account already exist</p>}

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
          <button className="btn primary" type="submit">
            Register
          </button>
          <button onClick={handleOnClickCancel} className="btn" type="button">
            Cancel
          </button>
        </div>
      </form>
      <p>
        Already have an account ?
        <span onClick={handleOnClickLogin}> Log In</span>
      </p>
    </div>
  );
};
export default withRouter(Register);
