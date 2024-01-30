import React, { useEffect, useState } from 'react';
import {
	Route,
	useParams,
	useHistory,
} from 'react-router-dom/cjs/react-router-dom.min';

import products from './../src/products.json';
import Shop from '../src/components/Shop';

const FilteredProducts = () => {
	const { minPrice, maxPrice, searchTerm = '' } = useParams();

	const minPriceNumber = Number(minPrice);
	const maxPriceNumber = Number(maxPrice);

	const minPriceOfProducts = Number.isNaN(minPriceNumber)
		? products
		: products.filter((item) => item.price >= minPriceNumber);

	const maxPriceOfProducts = Number.isNaN(maxPriceNumber)
		? minPriceOfProducts
		: minPriceOfProducts.filter((item) => item.price <= maxPriceNumber);

	const productsWithTerm =
		searchTerm === ''
			? maxPriceOfProducts
			: maxPriceOfProducts.filter((item) => {
					const productName = item.name.toLowerCase();
					const productDescription = item.description.toLowerCase();

					return (
						productName.includes(searchTerm) ||
						productDescription.includes(searchTerm)
					);
			  });

	return <Shop products={productsWithTerm} />;
};

const Task05 = () => {
	const history = useHistory();
	const initialData = {
		searchTerm: '',
		minPrice: '',
		maxPrice: '',
	};

	const [formData, setFormData] = useState(initialData);

	const handleChange = (e) => {
		const value = e.target.value;
		const inputName = e.target.name;
		setFormData({ ...formData, [inputName]: value });
	};

	useEffect(() => {
		history.push(
			`/task05/${formData.minPrice},${
				formData.maxPrice
			}-${formData.searchTerm.toLowerCase()}`
		);
	}, [formData]);

	return (
		<>
			<h1>Task05</h1>
			<form>
				<div>
					<label>Kwota od: </label>
					<input
						name='minPrice'
						type='number'
						value={formData.minPrice}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label>Kwota do: </label>
					<input
						name='maxPrice'
						type='number'
						value={formData.maxPrice}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor='searchTerm'>Wyszukaj: </label>
					<input
						id='searchTerm'
						name='searchTerm'
						type='text'
						value={formData.searchTerm}
						onChange={handleChange}
					/>
				</div>
			</form>

			<Route path='/task05/:minPrice?,:maxPrice?-:searchTerm?'>
				<FilteredProducts />
			</Route>
		</>
	);
};

export default Task05;
