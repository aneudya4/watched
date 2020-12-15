import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../homepage/HomePage';
import Login from '../login/Login';
import NavBar from '../navbar/NavBar';
// import NavBar from '../navbar/NavBar';

import Register from '../register/Register';

export default function HomePageRoutes() {
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
