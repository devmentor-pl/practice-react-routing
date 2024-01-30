import React from 'react';
import { Route, useParams, Link } from 'react-router-dom';
import products from '../src/products.json';
import Product from '../src/components/Product';

const ProductPage = () => {
	const { id } = useParams();
	const product = products.find((p) => p.id === Number(id));

	if (!product) {
		return <p>Product not found</p>;
	}
	return <Product {...product} />;
};
const Task02 = () => {
	return (
		<>
			<h1>Task02</h1>
			<ul>
				{products.map((product) => (
					<li key={product.id}>
						<Link to={`/task02/product-${product.id}`}>{product.name}</Link>
					</li>
				))}
			</ul>

			<Route path="/task02/product-:id">
				<ProductPage />
			</Route>
		</>
	);
};

export default Task02;

