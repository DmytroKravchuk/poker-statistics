import { combineReducers } from 'redux';
import { authReducer } from './auth';
import localeReducer from './locale';

export default combineReducers({
  localeReducer,
  authReducer,
});
