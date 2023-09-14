import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import products from './../products.json';

const Product = () => {
	const { id } = useParams();
	const [product = null] = products.filter(
		(item) => item.id === parseInt(id)
	);

	if (product === null) {
		return <Redirect to='/404.html' />;
	}

	const { name, description, category, price } = product;
	return (
		<article>
			<h3>{name}</h3>
			<p>Opis: {description}</p>
			<p>Cena: {price}zł</p>
			<p>Kategoria: {category}</p>
		</article>
	);
};

export default Product;
