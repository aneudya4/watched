import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import DashBoard from '../dashboard/Dashboard';
import HomePageRoutes from './HomePageRoutes';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/auth/dashboard" component={DashBoard} />
        <Route path="/" component={HomePageRoutes} />
      </Switch>
    </BrowserRouter>
  );
}
