import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Shop from '../src/components/Shop';
import products from './../src/products.json';

const Task05 = () => {
	const [minPrice, setMinPrice] = useState('');
	const [maxPrice, setMaxPrice] = useState('');
	const [search, setSearch] = useState('');
	const history = useHistory();
	useEffect(() => {
		const newMinPrice = minPrice == '' ? ' ' : minPrice;
		const newMaxPrice = maxPrice == '' ? ' ' : maxPrice;
		const newSearch = search == '' ? ' ' : search;
		const link = `/task05/[${newMinPrice}],[${newMaxPrice}]-[${newSearch}]`;
		history.push(link);
	}, [minPrice, maxPrice, search]);

	return (
		<>
			<h1>Task05</h1>
			<label>
				Min price:
				<input
					value={minPrice}
					type="number"
					onChange={(e) => setMinPrice(e.target.value)}
				/>
			</label>

			<br />
			<label>
				Max price:
				<input
					value={maxPrice}
					type="number"
					onChange={(e) => setMaxPrice(e.target.value)}
				/>
			</label>
			<br />
			<label>
				Search:
				<input value={search} onChange={(e) => setSearch(e.target.value)} />
			</label>
			<Switch>
				<Route path="/task05/[:minPrice],[:maxPrice]-[:search]">
					<Shop products={products} />
				</Route>
				<Route path="/task05">
					<Shop products={products} />
				</Route>
			</Switch>
		</>
	);
};

export default Task05;
