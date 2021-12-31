import {ALERTS_SET_TOAST, COMMON_DETAILS} from './types';

import axios from 'axios';
import dummyApi from '../../shared/dummyApi';

export const setToast =
  (toastMessage, toastType = 'success') =>
  async dispatch => {
    dispatch({
      type: ALERTS_SET_TOAST,
      payload: {toastMessage, toastType},
    });
  };

export const loadCommonDetails = () => async (dispatch, getState) => {
  console.log('loadcommnDetails');
  try {
    dispatch({type: COMMON_DETAILS, payload: true});
    const result = dummyApi.get('common-details').then(response => {
      console.log(response, 'response');
    });
    dispatch({type: COMMON_DETAILS, payload: result});
  } catch (error) {
    console.error('error', error);

    dispatch({type: COMMON_DETAILS, payload: false});
  }
};
