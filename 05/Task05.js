import React, { useState } from 'react';
import { Route, Link, useHistory } from 'react-router-dom';
import Shop from '../src/components/Shop';
import products from '../src/products.json';

const Task05 = () => {
	const [minValue, setMinValue] = useState('');
	const [maxValue, setMaxValue] = useState('');
	const [searchPhrase, setSearchPhrase] = useState('');
	const [link, setLink] = useState('/task05');
	const [filteredProducts, setFilteredProducts] = useState(products);
	const history = useHistory();

	const filterValue = products.filter((p) => p.price > minValue && p.price < maxValue);
	const filterPhrase = filterValue.filter((p) => p.name.includes(searchPhrase));

	const handleSubmit = (e) => {
		e.preventDefault();

		setLink(`/task05/[${minValue}],[${maxValue}]-[${searchPhrase}]`);
        changeArray
	};
	const changeArray = () => {
		setFilteredProducts(filterPhrase);
		history.push(link);
	};

	return (
		<>
			<h1>Task05</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<p>podaj przedział cenowy</p>
					<input
						type='text'
						value={minValue}
						onChange={(e) => setMinValue(Number(e.target.value))}
					/>
					<span>-</span>
					<input
						type='text'
						value={maxValue}
						onChange={(e) => setMaxValue(Number(e.target.value))}
					/>
				</div>
				<div>
					<label htmlFor=''>znajdz produkt</label>
					<input
						type='text'
						value={searchPhrase}
						onChange={(e) => setSearchPhrase(e.target.value)}
					/>
				</div>
				<input
					type='submit'
					value='submit'
				/>
			</form>

			<Route path={link}>
				<Shop products={filteredProducts} />
			</Route>
		</>
	);
};

export default Task05;
