/* eslint-disable no-unused-vars */
import React, { useReducer } from 'react';

import AppRouter from '../routers/AppRouter';
import {
  MediaContext,
  DispatchContext,
  WatchListContext,
  AuthFormsContext,
} from '../../appContext';
import fetchMediaReducer from '../reducers/fetchMediaReducer';
import authFormsReducer from '../reducers/authFormsReducers';
import watchListReducer from '../reducers/watchListReducer';
import './App.css';

function App() {
  const mediaInitialState = {
    movies: [],
    genres: [],
  };
  const watchListInitialState = [];
  const authInitialState = {
    showLogin: false,
    showRegister: false,
  };

  const [media, dispatch] = useReducer(fetchMediaReducer, mediaInitialState);
  const [auth, authDispatch] = useReducer(authFormsReducer, authInitialState);

  const [watchList, watchListDispatch] = useReducer(
    watchListReducer,
    watchListInitialState,
  );

  return (
    <AuthFormsContext.Provider value={{ auth, authDispatch }}>
      <MediaContext.Provider value={media}>
        <DispatchContext.Provider value={{ dispatch, watchListDispatch }}>
          <WatchListContext.Provider value={watchList}>
            <div className="App">
              <AppRouter />
            </div>
          </WatchListContext.Provider>
        </DispatchContext.Provider>
      </MediaContext.Provider>
    </AuthFormsContext.Provider>
  );
}

export default App;
