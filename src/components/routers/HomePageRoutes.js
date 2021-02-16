import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../homepage/HomePage';
import NavBar from '../navbar/NavBar';
import firebaseApp from '../../firebase';

import Spinner from '../spinner/Spinner';
export default function HomePageRoutes() {
  const [checkAuth, setCheckAuth] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        setCheckAuth(false);
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
        setCheckAuth(false);
      }
    });
  }, []);

  if (checkAuth && !isLoggedIn) {
    return <Spinner />;
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
