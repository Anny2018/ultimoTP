import { combineReducers } from 'redux';
import reducer from './reducer';
import itineraryReducer from './itineraryReducer';
import loginReducer from './loginReducer';
// import authReducer from './authReducer';

export default combineReducers({
  itinerary: itineraryReducer,
  city: reducer,
  login: loginReducer
/*  itinerary: itineraryReducer, */
//   auth: authReducer
});