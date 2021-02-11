import { combineReducers } from 'redux';
import { mediaReducer } from './mediaReducer';
const rootReducer = combineReducers({
  media: mediaReducer,
});

export default rootReducer;
