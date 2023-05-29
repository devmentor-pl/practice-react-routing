import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import Shop from './Shop';

const ShopWithCategory = ({ products }) => {
	const { category } = useParams();

	const filteredByCategory = products.filter(
		(item) => item.category.toLowerCase() === category.toLowerCase()
	);

	return filteredByCategory.length > 0 ? (
		<Shop products={filteredByCategory} />
	) : (
		<Redirect to='/task03/404.html' />
	);
};

export default ShopWithCategory;
