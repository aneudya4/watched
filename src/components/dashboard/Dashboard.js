import React, { useEffect, useContext, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import DashboardNav from '../dashboardNav/DashboardNav';
import MediaList from '../mediaList/MediaList';
import WatchList from '../watchList/WatchList';
import MediaDetails from '../MediaDetails/MediaDetails';
import SearchMedia from '../searchmedia/SearchMedia';
import { DispatchContext } from '../../appContext';
import config from '../config';
import Spinner from '../spinner/Spinner';
import { useDispatch } from 'react-redux';
import { initFetch } from '../../redux/actions/';
import { useSelector } from 'react-redux';

const DashBoard = ({ match, history }) => {
  const { watchListDispatch } = useContext(DispatchContext);
  const dispatch = useDispatch();
  const [verifyAuth, setVerifyAuth] = useState(true);
  const { auth } = useSelector((state) => state);
  useEffect(() => {
    dispatch(initFetch());
  }, [dispatch]);

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
          setVerifyAuth(false);
        } catch (error) {
          console.log(error);
        }
      };
      fetchWatchList();
    }
  }, [auth.user, watchListDispatch]);

  if (verifyAuth) {
    return <Spinner />;
  }

  if (!auth.isAuth) {
    return <Redirect to="/" />;
  }

  // console.log(isLoading);
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
