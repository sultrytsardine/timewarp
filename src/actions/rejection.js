import { API_REJECTION } from '../constants/apiRejectionType.js';

export const reject = (error) => ({
  type: API_REJECT,
  payload: error
});