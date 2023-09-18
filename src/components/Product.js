import React from 'react';

const Product = (props) => {
	const { name, description, category, price } = props;
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
