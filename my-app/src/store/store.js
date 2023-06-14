import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import cityReducer from './reducers/cityReducer';

const store = createStore(
  cityReducer,
  applyMiddleware(thunk)
);

export default store;