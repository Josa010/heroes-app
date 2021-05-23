import React from 'react';
import { HeroList } from '../heroes/HeroList';
import './DcScreen.css';

export const DcScreen = () => {
	return (
		<div>
			<div className='dc-img-container mt-4'>
				<img src='../assets/DC_Comics_logo.png' alt='Logo de DC' />
			</div>
			<hr />

			<HeroList publisher='DC Comics' />
		</div>
	);
};
