import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import HomePage from '../homepage/HomePage';
import Login from '../login/Login';
import Register from '../register/Register';
import DashBoard from '../dashboard/Dashboard';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route path="/auth/dashboard" component={DashBoard} />
        <Route path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}
