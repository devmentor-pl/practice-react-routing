import React from 'react';
import { useParams, Redirect } from 'react-router-dom';

import products from '../products.json';

const Product = () => {
	const { id, alias } = useParams();

	const [product = null] = products.filter((prod) => prod.id === parseInt(id));

	if (product === null) {
		return <Redirect to='/404.html' />;
	}
	const { name, description, category, price } = product;
	return (
		<article
			data-id={id}
			data-alias={alias}
		>
			<h1>Produkt: {name}</h1>
			<p>Kategoria: {category}</p>
			<p>Opis: {description}</p>
			<p>Cena: {price}</p>
		</article>
	);
};
export default Product;