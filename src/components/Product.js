import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import products from '../products.json';

const Product = () => {
	const { id } = useParams();
	const [product = null] = products.filter((item) => item.id === parseInt(id));

	if (product === null) {
		return <Redirect to='/404.html' />;
	}

	const { name, description, price, category } = product;

	return (
		<div>
			<h2>{name}</h2>
			<p>Opis: {description}</p>
			<p>Cena: {price}zł</p>
			<p>Kategoria: {category}</p>
		</div>
	);
};

export default Product;
