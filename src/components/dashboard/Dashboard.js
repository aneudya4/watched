import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import DashboardNav from '../dashboardNav/DashboardNav';
import MediaList from '../mediaList/MediaList';
import WatchList from '../watchList/WatchList';
import MediaDetails from '../MediaDetails/MediaDetails';
import SearchMedia from '../searchmedia/SearchMedia';
import Spinner from '../spinner/Spinner';
import { useDispatch, useSelector } from 'react-redux';

const DashBoard = ({ match, history }) => {
  const dispatch = useDispatch();
  const [verifyAuth, setVerifyAuth] = useState(true);
  const { auth } = useSelector((state) => state);

  useEffect(() => {
    if (auth.isAuth) {
      setVerifyAuth(false);
    }
  }, [auth.isAuth, dispatch]);

  if (verifyAuth) {
    return <Spinner />;
  }

  if (!auth.isAuth) {
    return <Redirect to="/" />;
  }

  localStorage.setItem('lastPath', history.location.pathname);

  return (
    <div className="dashboard">
      <DashboardNav />
      <Switch>
        <Route exact path={`${match.path}media`} component={MediaList} />
        <Route exact path={`${match.path}watchlist`} component={WatchList} />
        <Route exact path={`${match.path}search`} component={SearchMedia} />

        <Route
          exact
          path={`${match.path}details/:mediaId`}
          component={MediaDetails}
        />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default DashBoard;
