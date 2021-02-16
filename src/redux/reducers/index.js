import { combineReducers } from 'redux';
import { moviesReducer } from './moviesReducer';
import { loadingReducer } from './loadingReducer';
import { errorsReducer } from './errorsReducer';
import { authReducer } from './authReducer';
import { watchlistReducer } from './watchlistReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  loading: loadingReducer,
  errors: errorsReducer,
  auth: authReducer,
  watchlist: watchlistReducer,
});

export default rootReducer;
