import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router';
import { getHeroesById } from '../../selectors/getHeroById';

export const HeroScreen = ({ history }) => {
	const { heroeId } = useParams();

	const hero = useMemo(() => getHeroesById(heroeId), [heroeId]);

	if (!hero) {
		return <Redirect to='/' />;
	}

	const { superhero, publisher, alter_ego, first_appearance, characters } =
		hero;

	const handleReturn = () => {
		if (history.length <= 2) {
			hero.publisher === 'Marvel Comics' && history.push('/');
			hero.publisher === 'DC Comics' && history.push('/dc');
		} else {
			history.goBack();
		}
	};

	return (
		<div className='row mt-5 text-white'>
			<div className='col-6 col-lg-4'>
				<img
					src={`../assets/heroes/${heroeId}.jpg`}
					alt={superhero}
					className='img-thumbnail img-fluid animate__animated animate__fadeInLeft'
				/>
			</div>

			<div className='col-6 col-lg-8 animate__animated animate__fadeIn'>
				<h3>{superhero} </h3>
				<ul className='list-group list-group-flush '>
					<li className='list-group-item bg-transparent text-white'>
						<b>Alter ego:</b> {alter_ego}{' '}
					</li>
					<li className='list-group-item bg-transparent text-white'>
						<b>Publisher:</b> {publisher}{' '}
					</li>
					<li className='list-group-item bg-transparent text-white'>
						<b>First apperance:</b> {first_appearance}{' '}
					</li>
				</ul>

				<h5>characters</h5>
				<p>{characters}</p>

				<button className='btn btn-outline-info' onClick={handleReturn}>
					Return
				</button>
			</div>
		</div>
	);
};
