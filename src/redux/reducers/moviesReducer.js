import { moviesTypes } from '../actions/action-types';

const initialState = {
  popular: [],
  upcoming: [],
  top_rated: [],
  now_playing: [],
  genres: [],
  searched: [],
  category: 'popular',
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case moviesTypes.FETCH_POPULAR_MOVIES:
      return {
        ...state,
        popular: action.payload,
        category: 'popular',
      };
    case moviesTypes.FETCH_TOP_RATED_MOVIES:
      return {
        ...state,
        top_rated: action.payload,
        category: 'top_rated',
      };

    case moviesTypes.FETCH_MOVIES_UPCOMING:
      return {
        ...state,
        upcoming: action.payload,
        category: 'upcoming',
      };

    case moviesTypes.FETCH_MOVIE_IN_THEATERS:
      return {
        ...state,
        now_playing: action.payload,
        category: 'now_playing',
      };
    case moviesTypes.SET_MOVIES_CATEGORY:
      return {
        ...state,
        categories: action.payload,
      };

    case moviesTypes.FETCH_MOVIES_GENRES:
      return {
        ...state,
        genres: action.payload,
      };

    case moviesTypes.FETCH_MOVIES_BY_SEARCH:
      return {
        ...state,
        searched: action.payload,
        category: 'searched',
      };

    default:
      return state;
  }
};
