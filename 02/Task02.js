import React from 'react';
import { Route } from 'react-router-dom';
import ProductPage from '../src/components/ProductPage';

const Task02 = () => {
	return (
		<>
			<h1>Task02</h1>
			<Route path='/task02/product-:id'>
				<ProductPage />
			</Route>
		</>
	);
};

export default Task02;

