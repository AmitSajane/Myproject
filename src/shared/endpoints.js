/**
 * @file - endpoints.js
 * created on - 2021/12/27
 *
 * @author - Amit Sajane
 * @description - This file includes all the api endpoints and BestTime / FourSquare api's
 */
import {constants} from './';

const baseUrl = constants.API_BASE_URL;

/** -----------------------* API's ENDPOINTS *------------------------ */
export const apiEndpoints = {
  commonDetails: 'common-details',
  userDetails: 'user-details',
  login: 'login/signin',
  logout: 'logout',
  signup: 'signup',
};

