import {ALERTS_SET_TOAST} from '../actions/types';

const initialState = {
  toastMessage: '',
  toastType: 'success',
  toastDuration: 5000,
};

export default function (state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case ALERTS_SET_TOAST:
      return {
        ...state,
        toastMessage: payload.toastMessage,
        toastType: payload.toastType,
      };
    default:
      return state;
  }
}
