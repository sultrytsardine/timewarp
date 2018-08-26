import { API_REJECTION } from '../constants/apiRejectionType.js';

export default (state = [], action) => {
  switch (action.type) {
  case API_REJECTION:
    return {
      ...state,
      loading: false,
      error: action.payload
    };
  default:
    return state;
  }
};