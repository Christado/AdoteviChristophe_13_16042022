/* eslint-disable linebreak-style */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.css';
import { Provider } from 'react-redux';
import store from './redux/store';

/**
 * Call of application + store
 */

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
