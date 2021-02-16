import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../homepage/HomePage';
import NavBar from '../navbar/NavBar';

export default function HomePageRoutes() {
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
