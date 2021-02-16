import React, { useEffect } from 'react';
import AppRouter from '../routers/AppRouter';
import firebaseApp from '../../firebase';
import { useDispatch } from 'react-redux';
import { loginUser, initFetch } from '../../redux/actions';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(loginUser(user));
        dispatch(initFetch());
      }
    });
  }, [dispatch]);

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
