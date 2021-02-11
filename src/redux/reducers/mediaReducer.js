import { types } from '../actions/action-types';

const initialState = {
  movies: [],
  tvShows: [],
  currentPage: 1,
  isLoading: false,
};

export const mediaReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_MEDIA_START:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
