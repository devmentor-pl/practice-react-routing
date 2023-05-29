import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import Shop from '../src/components/Shop';
import products from '../src/products.json';

const Task04 = () => {
	const history = useHistory();

	const handleChange = (e) => {
		history.push(`/task04${e.target.value}`);
	};

	const sortProducts = (order) => {
		switch (order) {
			case '/task04/price-desc':
				return [...products].sort((a, b) => b.price - a.price);
			case '/task04/price-asc':
				return [...products].sort((a, b) => a.price - b.price);
			default:
				return products;
		}
	};

	return (
		<>
			<h1>Task04</h1>
			<select onChange={handleChange}>
				<option value=''>Sortuj</option>
				<option value='/price-desc'>Cena malejąco</option>
				<option value='/price-asc'>Cena rosnąco</option>
			</select>

			<Route>
				<Shop products={sortProducts(history.location.pathname)} />
			</Route>
		</>
	);
};

export default Task04;

