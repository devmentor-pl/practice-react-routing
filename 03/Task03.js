import React from 'react';

import products from './../src/products.json';
import { Route } from 'react-router-dom';
import Shop from '../src/components/Shop';
import Product from '../src/components/Product';

const Task03 = () => {
	return (
		<>
			<h1>Task03</h1>
			<Route exact path='/task03'>
				<Shop products={products} />
			</Route>
			<Route exact path='/task03/javascript'>
				<Shop products={products.filter(p => p.category === 'JavaScript')} />
			</Route>
			<Route exact path='/task03/react'>
				<Shop products={products.filter(p => p.category === 'React')} />
			</Route>
			<Route path='/task03/:category/product-:id'>
				<Product />
			</Route>
		</>
	);
};

export default Task03;
