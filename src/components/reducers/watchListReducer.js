/* eslint-disable no-case-declarations */
const watchListReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_WATCHLIST':
      return action.payload;
    case 'ADD_MEDIA_TO_WATCHLIST':
      return [...state, action.payload];
    case 'REMOVE_MEDIA_FROM_WATCHLIST':
      const filteredList = state.filter(
        (item) => item.movieId !== action.payload,
      );
      return filteredList;

    default:
      return state;
  }
};
export default watchListReducer;
