import React from 'react';
import { Switch, Route, useParams, Redirect, Link } from 'react-router-dom';

import Product from '../src/components/Product';
import products from './../src/products.json';

const ProductPage = () => {
	const { id } = useParams();
	const [product = null] = products.filter((item) => item.id === parseInt(id));

	if (product === null) {
		return <Redirect to='/404' />;
	}

	return <Product {...product} />;
};

const Task02 = () => {
	return (
		<>
			<h1>Task02</h1>
			<ul>
				{products.map((item) => (
					<li key={item.id}>
						<Link to={`/task02/product-${item.id}`}>produkt {item.id}</Link>
					</li>
				))}
			</ul>
			<Switch>
				<Route path='/task02/product-:id'>
					<ProductPage />
				</Route>
			</Switch>
		</>
	);
};

export default Task02;
