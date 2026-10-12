import React from 'react';
import { useParams, Link } from 'react-router-dom';

const Product = ({ id, name, description, category, price }) => {
	const params = useParams();

	if (!id) {
		return (
			<>
				<h2>Produkt</h2>
				<p>ID produktu: {params.id}</p>
				{params.category && <p>Kategoria: {params.category}</p>}
			</>
		);
	}

	return (
		<article>
			<h2>
				nazwa produktu: <Link to={`/task03/${category?.toLowerCase()}/product-${id}`}>{name}</Link>
			</h2>
			<p>opis produktu: {description}</p>
			<p>kategoria: {category}</p>
			<p>cena: {price}</p>
		</article>
	);
};

export default Product;
