import React, { useState, useEffect } from 'react';
import { Route, useHistory, useLocation } from 'react-router-dom';
import Shop from '../src/components/Shop';
import products from '../src/products.json';

const Task05 = () => {
	const history = useHistory();
	const location = useLocation();

	const [minValue, setMinValue] = useState('');
	const [maxValue, setMaxValue] = useState('');
	const [searchPhrase, setSearchPhrase] = useState('');
	const [filteredProducts, setFilteredProducts] = useState([]);

	useEffect(() => {
		const params = new URLSearchParams(location.search);

		setMinValue(params.get('minValue') || '');
		setMaxValue(params.get('maxValue') || '');
		setSearchPhrase(params.get('searchPhrase') || '');

		const filterValue = products.filter(
			(p) =>
				(!params.get('minValue') || p.price > Number(params.get('minValue'))) &&
				(!params.get('maxValue') || p.price < Number(params.get('maxValue'))) &&
				(!params.get('searchPhrase') ||
					p.name.toLowerCase().includes(params.get('searchPhrase').toLowerCase()) ||
					p.description.toLowerCase().includes(params.get('searchPhrase').toLowerCase()))
		);

		setFilteredProducts(filterValue);
	}, [location.search]);

	const handleSubmit = (e) => {
		e.preventDefault();

		const params = new URLSearchParams();
		if (minValue) params.set('minValue', minValue);
		if (maxValue) params.set('maxValue', maxValue);
		if (searchPhrase) params.set('searchPhrase', searchPhrase);

		const searchString = params.toString();
		const newLink = `/task05${searchString ? `?${searchString}` : ''}`;

		history.push(newLink);
	};

	return (
		<>
			<h1>Task05</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<p>Podaj przedział cenowy</p>
					<input
						type='text'
						value={minValue}
						onChange={(e) => setMinValue(e.target.value)}
					/>
					<span>-</span>
					<input
						type='text'
						value={maxValue}
						onChange={(e) => setMaxValue(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor=''>Znajdź produkt</label>
					<input
						type='text'
						value={searchPhrase}
						onChange={(e) => setSearchPhrase(e.target.value)}
					/>
				</div>
				<input
					type='submit'
					value='Szukaj'
				/>
			</form>

			<Route path='/task05'>
				<Shop products={filteredProducts} />
			</Route>
		</>
	);
};

export default Task05;
