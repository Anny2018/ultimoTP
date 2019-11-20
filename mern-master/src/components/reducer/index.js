import { combineReducers } from 'redux';
import reducer from './reducer';
//import itineraryReducer from './itineraryreducer';
// import authReducer from './authReducer';

export default combineReducers({
  city: reducer,
//  itinerary: itineraryReducer,
//   auth: authReducer
});