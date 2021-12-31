/**
 * constants.js
 * Created on 2021/12/27
 *
 * @author Amit Sajane
 * @description constants
 */

export const screens = {
  Splash: 'Splash',
  Login: 'Login',
  Signup: 'Signup',
  Home: 'Home',
  
};

export const venueBusiness = {
  dead: 0.2,
  filling_up: 0.3,
  busy: 1,
};

export const venueStatus = {
  DEAD: 'Dead',
  FILLING_UP: 'Filling Up',
  BUSY: 'Busy',
  FILLING_HALF: 'filling half',
};

// Keys
export const ACCESS_TOKEN_KEY = 'Access-Token';

export const validations = {
  email:
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};
