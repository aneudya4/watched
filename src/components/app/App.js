/* eslint-disable no-unused-vars */
import React, { useReducer } from 'react';
import AppRouter from '../routers/AppRouter';
import {
  MediaContext,
  DispatchContext,
  WatchListContext,
} from '../../appContext';
import fetchMediaReducer from '../reducers/fetchMediaReducer';
import watchListReducer from '../reducers/watchListReducer';
import './App.css';

function App() {
  const mediaInitialState = {
    movies: [],
    genres: [],
  };
  const watchListInitialState = [];

  const [media, dispatch] = useReducer(fetchMediaReducer, mediaInitialState);
  const [watchList, watchListDispatch] = useReducer(
    watchListReducer,
    watchListInitialState,
  );

  return (
    <MediaContext.Provider value={media}>
      <DispatchContext.Provider value={{ dispatch, watchListDispatch }}>
        <WatchListContext.Provider value={watchList}>
          <div className="App">
            <AppRouter />
          </div>
        </WatchListContext.Provider>
      </DispatchContext.Provider>
    </MediaContext.Provider>
  );
}

export default App;
