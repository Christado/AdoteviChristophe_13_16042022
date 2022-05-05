/* eslint-disable linebreak-style */
import { combineReducers } from 'redux';
import userReducer from './user.reducer';

/**
 * Establishment combineReducers for future reducers/ combine Reducer into 1
 */

export default combineReducers({
	userReducer,
});