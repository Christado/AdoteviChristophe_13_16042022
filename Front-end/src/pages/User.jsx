/* eslint-disable linebreak-style */
import React from 'react';
import Footer from '../components/Footer';
import HeaderUser from '../components/HeaderUser';
import Profil from '../components/Profil';

/**
 * 
 * @returns User page
 */

function User() {

	return (
		<div className='User'>
			<HeaderUser />
			<Profil />
			<Footer />
		</div>
	);
}

export default User;