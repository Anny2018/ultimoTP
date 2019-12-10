import { combineReducers } from 'redux';
import reducer from './reducer';
import itineraryReducer from './itineraryReducer';
import loginReducer from './loginReducer';
// import authReducer from './authReducer';

export default combineReducers({
  city: reducer,
 itinerary: itineraryReducer,
 login:loginReducer
//   auth: authReducer
});