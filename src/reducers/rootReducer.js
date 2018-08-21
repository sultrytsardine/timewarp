import { combineReducers } from 'redux';
import initialConfiguration from './clientConfiguration.js';
import error from './rejection.js';

export default combineReducers({
  initialConfiguration,
  error
});