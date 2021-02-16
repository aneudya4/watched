import { authTypes } from '../actions/action-types';

const initialState = {
  showLogin: false,
  showRegister: false,
  isAuth: false,
  user: null,
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.SHOW_HIDE_LOGIN:
      return { ...state, showLogin: !state.showLogin, showRegister: false };
    case authTypes.SHOW_HIDE_REGISTER:
      return { ...state, showLogin: false, showRegister: !state.showRegister };
    case authTypes.REGISTER_USER:
      return { showRegister: false, isAuth: true, user: action.payload };
    case authTypes.LOG_IN_USER:
      return { showLogin: false, isAuth: true, user: action.payload };
    case authTypes.LOG_OUT_USER:
      return { ...state, isAuth: false, user: null };

    default:
      return state;
  }
};
export default authReducer;
