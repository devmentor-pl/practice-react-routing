import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../products.json';

const Product = (props) => {
	const { id: paramsId } = useParams();
	const productFromJson =
		products.find((prod) => prod.id === parseInt(paramsId)) || {};

	const { id, name, description, category, price } = {
		...productFromJson,
		...props,
	};

	return (
		<article data-id={id}>
			<h1>{name}</h1>
			<p>Category: {category}</p> <p>Price: {price}</p>
			<p>{description}</p>
		</article>
	);
};

export default Product;
