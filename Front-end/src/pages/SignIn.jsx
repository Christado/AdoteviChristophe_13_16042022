/* eslint-disable linebreak-style */
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Form from '../components/Form';

/**
 * 
 * @returns Login page
 */

function SignIn() {
	return (
		<div className='SignIn'>
			<Header />
			<section>
				<Form />
			</section>
			<Footer />
		</div>
	);
}

export default SignIn;