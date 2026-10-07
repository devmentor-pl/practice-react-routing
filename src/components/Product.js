import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const Product = () => {
	const { id } = useParams();

	return (
		<>
			<h2>Produkt</h2>
			<p>ID produktu: {id}</p>
		</>
	);
};

export default Product;
