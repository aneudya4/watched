import { moviesTypes } from '../actions/action-types';

const initialState = {
  popular: [],
  upcoming: [],
  topRated: [],
  inTheaters: [],
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case moviesTypes.FETCH_POPULAR_MOVIES:
      return {
        ...state,
        popular: action.payload,
      };
    case moviesTypes.FETCH_TOP_RATED_MOVIES:
      return {
        ...state,
        topRated: action.payload,
      };

    case moviesTypes.FETCH_MOVIES_UPCOMING:
      return {
        ...state,
        upcoming: action.payload,
      };

    case moviesTypes.FETCH_MOVIE_IN_THEATERS:
      return {
        ...state,
        inTheaters: action.payload,
      };
    default:
      return state;
  }
};
