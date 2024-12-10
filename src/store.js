import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux';
import { thunk } from 'redux-thunk';


const store = createStore(
  rootReducer,
  applyMiddleware(thunk) // Apply Redux Thunk middleware
);

export default store;
