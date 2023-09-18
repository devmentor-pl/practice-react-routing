import React from 'react';
import { Switch, Route, useParams, Redirect } from 'react-router-dom';

import Product from '../src/components/Product';
import products from './../src/products.json';

const ProductPage = () => {
	const { id } = useParams();
	const [product = null] = products.filter((item) => item.id === parseInt(id));

	if (product === null) {
		return <Redirect to='/404.html' />;
	}

	return <Product {...product} />;
};

const Task02 = () => {
	return (
		<>
			<h1>Task02</h1>
			<Switch>
				<Route path='/task02/product-:id'>
					<ProductPage />
				</Route>
			</Switch>
		</>
	);
};

export default Task02;
