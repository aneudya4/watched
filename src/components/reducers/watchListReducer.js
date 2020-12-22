/* eslint-disable no-case-declarations */
const watchListReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MEDIA_TO_WATCHLIST':
      return [...state, action.payload];
    case 'REMOVE_MEDIA_FROM_WATCHLIST':
      const filteredList = state.filter((item) => item.id !== action.payload);
      return filteredList;

    default:
      return state;
  }
};
export default watchListReducer;
