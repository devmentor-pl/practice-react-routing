import React from 'react';
import { Route, useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import Shop from '../src/components/Shop';
import products from './../src/products.json';

const Task04 = () => {
	const history = useHistory();
    
	const handleSelect = (e) => {
		history.push(e.target.value);
	};

	return (
		<>
			<h1>Task04</h1>
			<label htmlFor='sort-price'>Sortowanie: </label>
			<select
				id='sort-price'
				name='price'
				onChange={handleSelect}>
				<option value='/task04'>wybierz</option>
				<option value='/task04/price-asc'>cena rosnąco</option>
				<option value='/task04/price-desc'>cena malejąco</option>
			</select>

			<Route path='/task04/price-asc'>
				<Shop products={[...products].sort((a, b) => a.price - b.price)} />
			</Route>
			<Route path='/task04/price-desc'>
				<Shop products={[...products].sort((a, b) => b.price - a.price)} />
			</Route>
		</>
	);
};

export default Task04;
