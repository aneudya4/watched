/* eslint-disable no-case-declarations */
const watchListReducer = (state = [1], action) => {
  switch (action.type) {
    case 'ADD_MEDIA_TO_WATCHLIST':
      return [...state, action.payload];
    case 'REMOVE_MEDIA_FROM_WATCHLIST':
      return action.payload;

    default:
      return state;
  }
};
export default watchListReducer;
