import React from 'react';
import { HeroList } from '../heroes/HeroList';
import './MarvelScreen.css';

export const MarvelScreen = () => {
	return (
		<div>
			<div className='marvel-img-container mt-4'>
				<img src='../assets/Marvel_Logo.svg' alt='Logo de Marvel' />
			</div>
			<hr />

			<HeroList publisher='Marvel Comics' />
		</div>
	);
};
