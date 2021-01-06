import React, { lazy, Suspense } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import HomePageRoutes from './HomePageRoutes';
import Spinner from '../spinner/Spinner';

const Dashboard = lazy(() => import('../dashboard/Dashboard'));

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/auth/dashboard/" component={Dashboard} />
          <Route exact path="/" component={HomePageRoutes} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
