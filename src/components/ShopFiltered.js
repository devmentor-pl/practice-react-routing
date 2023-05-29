import React from 'react';
import Shop from './Shop';
import { useParams } from 'react-router-dom';

const ShopFiltered = ({ products }) => {
	const { minPrice, maxPrice, searchPhrase = '' } = useParams();

	const filterByMinPrice = (products) => {
		return minPrice === undefined
			? products
			: products.filter((item) => item.price >= parseInt(minPrice));
	};

	const filterByMaxPrice = (products) => {
		return maxPrice === undefined
			? products
			: products.filter((item) => item.price <= parseInt(maxPrice));
	};

	const filterBySearchPhrase = (products) => {
		const lowerSearchPhrase = searchPhrase.toLowerCase();
		return lowerSearchPhrase === ''
			? products
			: products.filter(
					(item) =>
						item.name.toLowerCase().includes(lowerSearchPhrase) ||
						item.description.toLowerCase().includes(lowerSearchPhrase)
			  );
	};

	const productsByMinPrice = filterByMinPrice(products);
	const productsByMaxPrice = filterByMaxPrice(productsByMinPrice);
	const productsBySearchPhrase = filterBySearchPhrase(productsByMaxPrice);

	return <Shop products={productsBySearchPhrase} />;
};

export default ShopFiltered;
