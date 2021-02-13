import { loadingTypes, errorsTypes } from '../actions/action-types';

export const setLoading = () => {
  return {
    type: loadingTypes.SET_LOADING,
  };
};

export const removeLoading = () => {
  return {
    type: loadingTypes.REMOVE_LOADING,
  };
};

export const setErrorMsg = (errMsg) => {
  return {
    type: errorsTypes.SET_ERROR,
    payload: errMsg,
  };
};

export const clearErrorMsg = () => {
  return {
    type: errorsTypes.CLEAR_ERROR,
  };
};
