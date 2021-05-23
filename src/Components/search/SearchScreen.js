import React, { useMemo } from 'react';
import queryString from 'query-string';

import { useLocation } from 'react-router';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {
	const location = useLocation();
	const { q = '' } = queryString.parse(location.search);

	const [formValues, handleInputChange] = useForm({
		searchText: q,
	});
	const { searchText } = formValues;

	const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

	const handleSearch = (e) => {
		e.preventDefault();
		history.push(`?q=${searchText}`);
	};

	return (
		<div className='text-white'>
			<div className='my-5'>
				<h1>Search</h1>
				<hr />
			</div>

			<div className='row'>
				<div className='col-12 col-xl-5'>
					<h4 className='mb-4'>Search Form</h4>
					<form onSubmit={handleSearch}>
						<input
							type='text'
							placeholder='Find your hero'
							className='form-control'
							name='searchText'
							autoComplete='off'
							value={searchText}
							onChange={handleInputChange}
						/>
						<div className='d-grid mt-2 mb-5'>
							<button
								type='submit'
								className='btn btn-block btn-outline-primary'
							>
								Search
							</button>
						</div>
					</form>
				</div>

				<div className='col-12 col-xl-7'>
					<h4 className='mb-2 text-center'>Result</h4>

					{q === '' && (
						<div className='alert alert-info'>Search a hero</div>
					)}

					{q !== '' && heroesFiltered.length === 0 && (
						<div className='alert alert-danger'>
							There is no a hero with {q}{' '}
						</div>
					)}

					<div className='animate__animated animate__fadeInLeft text-center'>
						{heroesFiltered.map((hero) => (
							<HeroCard key={hero.id} {...hero} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
