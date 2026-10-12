import React, { useState } from 'react';
import { Route, useHistory, useLocation } from 'react-router-dom';
import Shop from '../src/components/Shop';
import products from './../src/products.json';

const Task05 = () => {
	const [minPrice, setMinPrice] = useState('');
	const [maxPrice, setMaxPrice] = useState('');
	const [searchTerm, setSearchTerm] = useState('');

	const history = useHistory();
	const location = useLocation();
	const filters = location.pathname.split('/')[2];

	let filteredProducts = products;

	if (filters) {
		const [prices, term] = filters.split('-');
		const [min, max] = prices.split(',');

		filteredProducts = products.filter(product => {
			const matchesMinPrice = !min || product.price >= Number(min);
			const matchesMaxPrice = !max || product.price <= Number(max);
			const matchesText =
				!term ||
				product.name.toLowerCase().includes(term.toLowerCase()) ||
				product.description.toLowerCase().includes(term.toLowerCase());

			return matchesMinPrice && matchesMaxPrice && matchesText;
		});
	}

	const handleSubmit = e => {
		e.preventDefault();

		history.push(`/task05/${minPrice},${maxPrice}-${searchTerm}`);
	};

	const handleClear = () => {
		setMinPrice('');
		setMaxPrice('');
		setSearchTerm('');

		history.push(`/task05`);
	};

	return (
		<>
			<h1>Task05</h1>
			<form onSubmit={handleSubmit}>
				<input type='number' placeholder='Cena od' value={minPrice} onChange={e => setMinPrice(e.target.value)} />
				<input type='number' placeholder='Cena do' value={maxPrice} onChange={e => setMaxPrice(e.target.value)} />
				<input
					type='text'
					placeholder='Szukana fraza'
					value={searchTerm}
					onChange={e => setSearchTerm(e.target.value)}
				/>
				<button type='submit'>Szukaj</button>
			</form>
			<button type='button' onClick={handleClear}>
				Wyczyść filtry
			</button>

			<Route exact path='/task05'>
				<Shop products={products} />
			</Route>

			<Route exact path='/task05/:filters'>
				<Shop products={filteredProducts} />
			</Route>
		</>
	);
};

export default Task05;
