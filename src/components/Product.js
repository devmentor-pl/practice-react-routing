import React from 'react';
import { Redirect } from 'react-router-dom';

const Product = (props) => {
	const { name, description, price, category } = props;

	if (Object.keys(props).length === 0) {
		return <Redirect to='/404.html' />;
	}

	return (
		<div>
			<h3>{name}</h3>
			<p>{description}</p>
			<p>Cena: {price}</p>
			<p>Kategoria: {category}</p>
		</div>
	);
};

export default Product;
