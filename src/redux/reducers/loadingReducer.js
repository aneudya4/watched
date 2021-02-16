import { loadingTypes } from '../actions/action-types';

const initialState = { isLoading: false };

export const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case loadingTypes.SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case loadingTypes.REMOVE_LOADING:
      return {
        isLoading: false,
      };

    default:
      return state;
  }
};
