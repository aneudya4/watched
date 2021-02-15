import React, { useEffect, useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import DashboardNav from '../dashboardNav/DashboardNav';
import MediaList from '../mediaList/MediaList';
import WatchList from '../watchList/WatchList';
import MediaDetails from '../MediaDetails/MediaDetails';
import SearchMedia from '../searchmedia/SearchMedia';
import { DispatchContext, AuthFormsContext } from '../../appContext';
import config from '../config';
import { initFetch } from '../../redux/actions/';

import { useDispatch } from 'react-redux';

const DashBoard = ({ match, history }) => {
  const { watchListDispatch } = useContext(DispatchContext);
  const { auth } = useContext(AuthFormsContext);
  const dispatched = useDispatch();

  useEffect(() => {
    dispatched(initFetch());
  }, [dispatched]);

  useEffect(() => {
    if (auth.user) {
      const fetchWatchList = async () => {
        try {
          const results = await fetch(
            `${config.API_ENDPOINT}${auth.user.uid}`,
            {
              method: 'GET',
              headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${config.API_KEY}`,
              },
            },
          );
          const resultsJson = await results.json();
          watchListDispatch({
            type: 'GET_WATCHLIST',
            payload: resultsJson,
          });
        } catch (error) {
          console.log(error);
        }
      };
      fetchWatchList();
    }
  }, [auth.user, watchListDispatch]);

  if (auth.isAuth === false) {
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
