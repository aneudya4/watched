/* eslint-disable no-unused-vars */
/* eslint-disable import/no-cycle */
/* eslint react/prop-types: 0 */

import React, { useEffect, useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import DashboardNav from '../dashboardNav/DashboardNav';
import MediaList from '../mediaList/MediaList';
import WatchList from '../watchList/WatchList';
import MediaDetails from '../MediaDetails/MediaDetails';
import { DispatchContext } from '../../appContext';

const DashBoard = ({ match }) => {
  const { dispatch } = useContext(DispatchContext);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const results = await fetch(
          'https://api.themoviedb.org/3/movie/popular?api_key=d35dda56d61ee0678a341b8d5c804efc&language=en-US&page=1',
        );
        const resultsJson = await results.json();
        dispatch({
          type: 'MEDIA_FETCHING',
          payload: resultsJson.results,
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, []);
  useEffect(() => {
    const fetchGeres = async () => {
      try {
        const results = await fetch(
          'https://api.themoviedb.org/3/genre/movie/list?api_key=d35dda56d61ee0678a341b8d5c804efc&language=en-US',
        );
        const resultsJson = await results.json();
        dispatch({
          type: 'MEDIA_GENRES',
          payload: resultsJson.genres,
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchGeres();
  }, []);

  return (
    <div className="dashboard">
      <DashboardNav />
      <Switch>
        <Route exact path={match.path} component={MediaList} />
        <Route exact path={`${match.path}/watchlist`} component={WatchList} />

        <Route
          exact
          path={`${match.path}/details/:mediaId`}
          component={MediaDetails}
        />

        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default DashBoard;
