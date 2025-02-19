/* eslint-disable linebreak-style */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import User from './pages/User';
import Error from './pages/Error';

/**
 * 
 * @returns routes for all the application
 */

const App = () => {
	return (
		<BrowserRouter >
			<Routes>
				<Route path='/' element={ <Home /> } />
				<Route path='sign-in' element={ <SignIn /> } />
				<Route path='user' element={ <User /> } />
				<Route path='*' element={ <Error /> } />
			</Routes>
		</BrowserRouter>
	);
};

export default App;

