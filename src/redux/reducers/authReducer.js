import {
  AUTH_LOADING,
  LOAD_USER,
  WALKER_LIST,
  GENERATE_QUOTE,
} from '../actions/types';

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  userDetails: {},
  walkerList: {},
  date: Date(Date.now()),
  generatedQuotes: [],
};

export default function (state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case LOAD_USER:
      return {
        ...state,
        userDetails: payload,
        isAuthenticated: true,
        isLoading: false,
      };

    case WALKER_LIST:
      console.log('...payload', payload);
      return {
        ...state,
        walkerList: payload,
        isLoading: false,
        isAuthenticated: false,
      };

    case GENERATE_QUOTE:
      return {
        ...state,
        generatedQuotes: payload,
        date: payload,
      };

    default:
      return state;
  }
}
