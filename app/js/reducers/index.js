import { combineReducers } from 'redux';
import hotels from './hotels';
import countries from './countries';

export default combineReducers({
  hotels,
  countries,
});
