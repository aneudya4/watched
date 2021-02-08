const initialState = {
  movies: [],
  genres: [],
  similarMovies: [],
};
const fetchMediaReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MEDIA_FETCHING':
      return { ...state, movies: action.payload };
    case 'SIMILAR_MEDIA_FETCHING':
      return { ...state, similarMovies: action.payload };
    case 'MEDIA_GENRES':
      return { ...state, genres: action.payload };
    case 'SEARCH_MEDIA':
      return { ...state, movies: action.payload };

    default:
      return state;
  }
};
export default fetchMediaReducer;
