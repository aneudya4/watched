import { types } from '../actions/action-types';

const initialState = {
  media: [],
  currentPage: 1,
  isLoading: false,
  error: '',
};

export const mediaReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_MEDIA_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.FETCH_MEDIA_SUCCESS:
      return {
        ...state,
        media: action.payload,
        isLoading: false,
      };
    case types.FETCH_MEDIA_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
