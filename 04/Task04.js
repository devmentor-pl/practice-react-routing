import React from 'react';
import { useHistory, Route } from 'react-router-dom';

import Shop from '../src/components/Shop';
import products from '../src/products.json';

const Task04 = () => {
	const history = useHistory();
	const handleChange = (event) => {
		history.push(event.target.value);
	};

	const productsAsc = [...products].sort((a, b) => a.price - b.price);
	const productsDesc = [...products].sort((a, b) => b.price - a.price);

	return (
		<>
			<h1>Task04</h1>
			<select onChange={handleChange}>
				<option value=''>Sortuj według</option>
				<option value='/task04/price-desc'>Cena malejąco</option>
				<option value='/task04/price-asc'>Cena rosnąco</option>
			</select>
            
			<Route path={'/task04/price-asc'}>
				<Shop products={productsAsc} />
			</Route>
			<Route path={'/task04/price-desc'}>
				<Shop products={productsDesc} />
			</Route>
		</>
	);
};

export default Task04;

