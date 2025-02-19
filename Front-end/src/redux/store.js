/* eslint-disable linebreak-style */
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import  thunk  from 'redux-thunk';
import rootReducer from './reducers';

/**
 * store configuration + devTools authorisation for production mode
 */


// convert object to string and store in localStorage
const saveToLocalStorage = (state) => {
	try {
		const serialisedState = JSON.stringify(state);
		localStorage.setItem('persistantState', serialisedState);
	} catch (e) {
		console.warn(e);
	}
};

// load string from localStarage and convert into an Object
// invalid output must be undefined
const loadFromLocalStorage = () => {
	try {
		const serialisedState = localStorage.getItem('persistantState');
		if (serialisedState === null) return undefined;
		return JSON.parse(serialisedState);
	} catch (e) {
		console.warn(e);
		return undefined;
	}
};

// create our store from our rootReducers and use loadFromLocalStorage
// to overwrite any values that we already have saved
const store = createStore( rootReducer, loadFromLocalStorage(), composeWithDevTools(applyMiddleware(thunk)));

// listen for store changes and use saveToLocalStorage to
// save them to localStorage
store.subscribe(() => saveToLocalStorage(store.getState()));


export default store;