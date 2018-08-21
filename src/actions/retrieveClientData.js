import { CLIENT_CONFIGURATION_REQUEST, CLIENT_CONFIGURATION_SUCCESS, CLIENT_CONFIGURATION_REJECT } from '../constants/configurationActionTypes.js';
import { reject } from './rejection.js';

export const retrieveClientData = token => dispatch => {
  dispatch(request());

  return getClientConfiguration(token)
    .then(configuration => dispatch(success(configuration)))
    .catch(error => dispatch(reject(error)))
}

const request = () => ({ type: CLIENT_CONFIGURATION_REQUEST });

const success = (configuration) => ({
  type: CLIENT_CONFIGURATION_SUCCESS,
  payload: configuration
});
