import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Product = (props) => {
	const { id, name, description, category, price } = props;
	return (
		<article>
			<Link to={`/task02/product-${id}`}>
				<h3>{name}</h3>
			</Link>
			<p>Opis: {description}</p>
			<p>Cena: {price}zł</p>
			<p>Kategoria: {category}</p>
		</article>
	);
};

export default Product;
