import { CLIENT_CONFIGURATION_REQUEST, CLIENT_CONFIGURATION_SUCCESS } from '../constants/configurationActionTypes.js';

export default (state = [], action) => {
  switch (action.type) {
  case CLIENT_CONFIGURATION_REQUEST:
    return {
      ...state,
      loading: true
    };
  case CLIENT_CONFIGURATION_SUCCESS:
    return {
      ...state,
      ...action.payload,
      loading: false
    };
  default: 
    return state;
  }
};