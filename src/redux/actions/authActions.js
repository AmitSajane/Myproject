import {AUTH_LOADING, LOAD_USER, WALKER_LIST, GENERATE_QUOTE} from './types';

import dummyApi from '../../shared/dummyApi';

export const loadUserDetails =
  (userDetails, payload) => async (dispatch, getState) => {
    try {
      console.log('userDetails is loading');
      dispatch({type: LOAD_USER, payload: userDetails});
      const results = dummyApi.post('login/signin').then(response => {
        console.log('userDeatils', response);
      });
    } catch (error) {
      console.log('...Error in loginUserDetails action', error);
    } finally {
      dispatch({
        type: LOAD_USER,
        payload: false,
      });
    }
  };

export const getWalkers = (walkerList, payload) => (dispatch, getState) => {
  console.log('authaction getwalkerList is called', payload);
  try {
    dispatch({
      type: WALKER_LIST,
      payload: walkerList,
    });
    const walkerResult = dummyApi.get('get-walkers').then(response => {
      const persons = response?.data?.data?.venues;

      console.log('...wlakHistory', persons);
    });
  } catch (error) {
    console.log('error accured in walker list', error);
  } finally {
    dispatch({type: WALKER_LIST, payload: false});
  }
};

export const generateQuote = () => dispatch => {
  try {
    const randomNum = Math.floor(Math.random() * (500 - 1)) + 1;
    return fetch(`https://jsonplaceholder.typicode.com/comments`).then(res => {
      console.log('Qoutes from comments ', res);
      dispatch({
        type: GENERATE_QUOTE,
        payload: res,
        date: Date(Date.now()),
      });
    });
  } catch (error) {
    console.log(error);
  } finally {
    dispatch({type: WALKER_LIST, payload: false});
  }
};

// export const
