import { combineReducers } from 'redux';
import authReducer from './Reducers/AuthReducer';


const rootReducer = combineReducers({
  auth: authReducer, // Add more reducers as needed
});

export default rootReducer;
