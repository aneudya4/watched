const initialState = {
  showLogin: false,
  showRegister: false,
  isAuth: false,
  user: null,
};
const authFormsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_LOGIN':
      return { ...state, showLogin: true, showRegister: false };
    case 'HIDE_LOGIN':
      return { ...state, showLogin: false };
    case 'SHOW_REGISTER':
      return { ...state, showLogin: false, showRegister: true };
    case 'HIDE_REGISTER':
      return { ...state, showRegister: false };
    case 'REGISTER_USER':
      return { showRegister: false, isAuth: true, user: action.payload };
    case 'LOG_IN_USER':
      return { showLogin: false, isAuth: true, user: action.payload };
    case 'LOG_OUT_USER':
      return { ...state, isAuth: false, user: null };

    default:
      return state;
  }
};
export default authFormsReducer;
