import { watchListTypes } from '../actions/action-types';

export const watchlistReducer = (state = [], action) => {
  switch (action.type) {
    case watchListTypes.FETCH_FROM_WATCHLIST:
      return action.payload;

    case watchListTypes.ADD_TO_WATCHLIST:
      return [...state, action.payload];

    case watchListTypes.REMOVE_FROM_WATCHLIST:
      const filteredList = state.filter(
        (item) => item.movieId !== action.payload,
      );
      return filteredList;

    default:
      return state;
  }
};
