import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import HomePageRoutes from './HomePageRoutes';
import Dashboard from '../dashboard/Dashboard';
export default function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/auth/dashboard/" component={Dashboard} />
        <Route exact path="/" component={HomePageRoutes} />
        <Route path="*" component={HomePageRoutes} />
        {/* replace this with a not-found component */}
      </Switch>
    </BrowserRouter>
  );
}
