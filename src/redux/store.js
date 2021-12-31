import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import Reduxthunk from 'redux-thunk';
import rootReducer from './reducers';
import reactotron from '../config/reactotron';

const middlewares = applyMiddleware(Reduxthunk);

const store = createStore(
  rootReducer,
  compose(middlewares, reactotron.createEnhancer()),
);

export default store;
