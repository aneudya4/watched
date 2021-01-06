/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useReducer, useEffect, useState } from 'react';

import AppRouter from '../routers/AppRouter';
import {
  MediaContext,
  DispatchContext,
  WatchListContext,
  AuthFormsContext,
} from '../../appContext';
import firebaseApp from '../../firebase';
import fetchMediaReducer from '../reducers/fetchMediaReducer';
import authFormsReducer from '../reducers/authFormsReducers';
import watchListReducer from '../reducers/watchListReducer';
import './App.css';

function App({ history }) {
  const [user, setCurrentUser] = useState(null);
  const mediaInitialState = {
    movies: [],
    genres: [],
    similarMovies: [],
  };
  const watchListInitialState = [];
  const authInitialState = {
    showLogin: false,
    showRegister: false,
    isAuth: false,
    user,
  };

  const [media, dispatch] = useReducer(fetchMediaReducer, mediaInitialState);
  const [auth, authDispatch] = useReducer(authFormsReducer, authInitialState);

  const [watchList, watchListDispatch] = useReducer(
    watchListReducer,
    watchListInitialState,
  );

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged(setCurrentUser);
  }, [user]);

  useEffect(() => {
    if (user) {
      authDispatch({ type: 'LOG_IN_USER', payload: user });
    }
  }, [user]);

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
