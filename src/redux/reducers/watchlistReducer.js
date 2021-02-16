import { watchListTypes } from '../actions/action-types';

export const tvShowsReducer = (state = [], action) => {
  switch (action.type) {
    case watchListTypes.FETCH_FROM_WATCHLIST:
      return action.payload;

    case watchListTypes.ADD_TO_WATCHLIST:
      return action.payload;

    case watchListTypes.REMOVE_FROM_WATCHLIST:
      return action.payload;

    default:
      return state;
  }
};
