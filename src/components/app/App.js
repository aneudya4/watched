import React, { useEffect } from 'react';
import AppRouter from '../routers/AppRouter';
import firebaseApp from '../../firebase';
import { useDispatch } from 'react-redux';
import { loginUser, setLoading, removeLoading } from '../../redux/actions';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(setLoading());
        dispatch(loginUser(user));
        dispatch(removeLoading());
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
