/* eslint-disable no-case-declarations */
// eslint-disable-next-line import/prefer-default-export

const initialState = {
  showLogin: false,
  showRegister: false,
};
const authFormsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_LOGIN':
      return { showLogin: true, showRegister: false };
    case 'HIDE_LOGIN':
      return { ...state, showLogin: false };
    case 'SHOW_REGISTER':
      return { showLogin: false, showRegister: true };
    case 'HIDE_REGISTER':
      return { ...state, showRegister: false };

    default:
      return state;
  }
};
export default authFormsReducer;
