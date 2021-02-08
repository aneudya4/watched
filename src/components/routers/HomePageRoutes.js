import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AuthFormsContext } from '../../appContext';
import HomePage from '../homepage/HomePage';
import Login from '../login/Login';
import NavBar from '../navbar/NavBar';
import Register from '../register/Register';

export default function HomePageRoutes() {
  const { auth } = useContext(AuthFormsContext);
  if (auth.isAuth) {
    const path = localStorage.getItem('lastPath') || '/auth/dashboard/media';
    return <Redirect to={path} />;
  }
  return (
    <section className="landing">
      <NavBar />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route path="/" component={HomePage} />
      </Switch>
    </section>
  );
}
