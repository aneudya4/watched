import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from '../homepage/HomePage';
import NavBar from '../navbar/NavBar';
import { useSelector } from 'react-redux';

export default function HomePageRoutes() {
  const { auth } = useSelector((state) => state);
  if (auth.isAuth) {
    const path = localStorage.getItem('lastPath') || '/auth/dashboard/media';
    return <Redirect to={path} />;
  }
  return (
    <section className="landing">
      <NavBar />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="*" component={HomePageRoutes} />
      </Switch>
    </section>
  );
}
