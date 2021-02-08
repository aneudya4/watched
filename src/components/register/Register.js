import React, { useContext, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { AuthFormsContext } from '../../appContext';
import firebaseApp from '../../firebase';

const Register = ({ history }) => {
  const { auth, authDispatch } = useContext(AuthFormsContext);
  const [showError, setShowError] = useState(false);

  const showRegister = auth.showRegister ? 'show-register' : null;

  const handleOnClickCancel = () => {
    authDispatch({ type: 'HIDE_REGISTER' });
  };
  const handleOnClickLogin = () => {
    authDispatch({ type: 'SHOW_LOGIN' });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;
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
      setShowError(true);
    }
  };
  return (
    <div className={`register auth-form  ${showRegister}`}>
      <h4>REGISTER</h4>

      {showError && <p className="error">Account already exist</p>}

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
