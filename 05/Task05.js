import React, { useState } from 'react';
import Shop from '../src/components/Shop';
import ShopFiltered from '../src/components/ShopFiltered';
import products from '../src/products.json';
import { Route, useHistory } from 'react-router-dom';

const initialState = {
	minPrice: '',
	maxPrice: '',
	searchPhrase: '',
};

const Task05 = () => {
	const [form, setForm] = useState(initialState);
	const history = useHistory();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const { minPrice, maxPrice, searchPhrase } = form;
		if (minPrice !== '' || maxPrice !== '' || searchPhrase !== '') {
			history.push(`/task05/${minPrice},${maxPrice}-${searchPhrase}`);
		} else {
			history.replace('/task05');
		}
	};

	return (
		<>
			<h1>Task05</h1>
			<form onSubmit={handleSubmit}>
				<input
					type='number'
					value={form.minPrice}
					name='minPrice'
					onChange={handleChange}
					placeholder='cena minimalna'
				/>
				<input
					type='number'
					value={form.maxPrice}
					name='maxPrice'
					onChange={handleChange}
					placeholder='cena maksymalna'
				/>
				<input
					type='text'
					value={form.searchPhrase}
					name='searchPhrase'
					onChange={handleChange}
					placeholder='szukaj po nazwie'
				/>
				<button>filtruj</button>
			</form>
			<Route exact path='/task05'>
				<Shop products={products} />
			</Route>
			<Route path='/task05/:minPrice?,:maxPrice?-:searchPhrase?'>
				<ShopFiltered products={products} />
			</Route>
		</>
	);
};

export default Task05;
