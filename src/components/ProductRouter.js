import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import Product from './Product'; 
import products from '../products.json';

const ProductRouter = ({ version }) => {
	const { id } = useParams();

	const [product = null] = products.filter((prod) => prod.id === parseInt(id));

	if (product === null) {
		return <Redirect to='/404.html' />;
	}

	const { name, description, category, price } = product;

	return (
		<Product
			id={id}
			name={name}
			description={description}
			category={category}
			price={price}
			version={version}
		/>
	);
};

export default ProductRouter;