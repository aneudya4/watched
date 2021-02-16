import React, { useReducer, useEffect, useState } from 'react';
import AppRouter from '../routers/AppRouter';
import { DispatchContext, WatchListContext } from '../../appContext';
import firebaseApp from '../../firebase';
import watchListReducer from '../reducers/watchListReducer';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/actions';
import './App.css';

function App() {
  const [user, setCurrentUser] = useState(null);
  const dispatched = useDispatch();

  const watchListInitialState = [];

  const [watchList, watchListDispatch] = useReducer(
    watchListReducer,
    watchListInitialState,
  );

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged(setCurrentUser);
  }, [user]);

  useEffect(() => {
    if (user) {
      dispatched(loginUser(user));
    }
  }, [user, dispatched]);

  return (
    <DispatchContext.Provider value={{ watchListDispatch }}>
      <WatchListContext.Provider value={watchList}>
        <div className="App">
          <AppRouter />
        </div>
      </WatchListContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;
