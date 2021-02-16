import { errorsTypes } from '../actions/action-types';

const initialState = { errorMsg: '' };

export const errorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case errorsTypes.SET_ERROR:
      return {
        ...state,
        errorMsg: action.payload,
      };
    case errorsTypes.CLEAR_ERROR:
      return {
        errorMsg: '',
      };

    default:
      return state;
  }
};
