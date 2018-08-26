import { SET_AUTHENTICATION } from '../constants/authentication.js';

export default (state = [], action) => {
  switch (action.type) {
  case SET_AUTHENTICATION:
    return {
      ...state,
      user: action.payload.user,
      authenticated: action.payload.authenticated,
      token: action.payload.token
    };
  default:
    return state;
  }
};