import { SET_AUTHENTICATION } from '../constants/authentication.js';

export const setAuthenticated = (payload) => ({
  type: SET_AUTHENTICATION,
  payload
});