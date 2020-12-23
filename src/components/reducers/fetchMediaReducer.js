/* eslint-disable no-case-declarations */
// eslint-disable-next-line import/prefer-default-export

const initialState = {
  movies: [],
  genres: [],
};
const fetchMediaReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MEDIA_FETCHING':
      return { ...state, movies: action.payload };
    case 'MEDIA_GENRES':
      return { ...state, genres: action.payload };
    case 'SEARCH_MEDIA':
      return { ...state, movies: action.payload };

    default:
      return state;
  }
};
export default fetchMediaReducer;
