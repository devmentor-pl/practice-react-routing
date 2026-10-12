import React from 'react';
import { Route } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import Shop from '../src/components/Shop';
import products from './../src/products.json';

const Task04 = () => {
	const history = useHistory();
	const location = useLocation();

	const pathParts = location.pathname.split('/');
	const selectedOption = pathParts[2] || 'price-asc';

	const handleChange = e => {
		history.push(`/task04/${e.target.value}`);
	};

	return (
		<>
			<h1>Task04</h1>
			<select value={selectedOption} onChange={handleChange}>
				<option value='price-asc'>cena rosnąco</option>
				<option value='price-desc'>cena malejąco</option>

				<option value='name-asc'>nazwa A-Z</option>
				<option value='name-desc'>nazwa Z-A</option>

				<option value='id-asc'>ID rosnąco</option>
				<option value='id-desc'>ID malejąco</option>
			</select>

			<Route exact path='/task04'>
				<Shop products={products} />
			</Route>

			<Route path='/task04/price-asc'>
				<Shop products={[...products].sort((a, b) => a.price - b.price)} />
			</Route>
			<Route path='/task04/price-desc'>
				<Shop products={[...products].sort((a, b) => b.price - a.price)} />
			</Route>

			<Route path='/task04/name-asc'>
				<Shop products={[...products].sort((a, b) => a.name.localeCompare(b.name))} />
			</Route>
			<Route path='/task04/name-desc'>
				<Shop products={[...products].sort((a, b) => b.name.localeCompare(a.name))} />
			</Route>

			<Route path='/task04/id-asc'>
				<Shop products={[...products].sort((a, b) => a.id - b.id)} />
			</Route>
			<Route path='/task04/id-desc'>
				<Shop products={[...products].sort((a, b) => b.id - a.id)} />
			</Route>
		</>
	);
};

export default Task04;
