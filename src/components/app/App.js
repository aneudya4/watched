import React, { useReducer } from 'react';
import AppRouter from '../routers/AppRouter';
import { MediaContext, DispatchContext } from '../../appContext';
import fetchMediaReducer from '../reducers/fetchMediaReducer';

import './App.css';

function App() {
  const initialState = {
    movies: [],
    genres: [],
  };
  const [media, dispatch] = useReducer(fetchMediaReducer, initialState);

  return (
    <MediaContext.Provider value={media}>
      <DispatchContext.Provider value={dispatch}>
        <div className="App">
          <AppRouter />
        </div>
      </DispatchContext.Provider>
    </MediaContext.Provider>
  );
}

export default App;
