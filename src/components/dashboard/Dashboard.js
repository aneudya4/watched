/* eslint react/prop-types: 0 */

import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import DashboardNav from '../dashboardNav/DashboardNav';
import MediaList from '../mediaList/MediaList';
import MediaDetails from '../MediaDetails/MediaDetails';

const DashBoard = ({ match }) => (
  <div className="dashboard">
    <DashboardNav />
    <Switch>
      <Route exact path={match.path} component={MediaList} />
      <Route
        exact
        path={`${match.path}/details/:mediaId`}
        component={MediaDetails}
      />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default DashBoard;
