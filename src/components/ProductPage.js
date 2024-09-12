import React from 'react';
import { useParams } from 'react-router-dom';
import Product from './Product';
import products from '../products.json';

const ProductPage = () => {
	const { id } = useParams();

	const [product = null] = products.filter((item) => item.id === parseInt(id));

	return <Product {...product} />;
};

export default ProductPage;
