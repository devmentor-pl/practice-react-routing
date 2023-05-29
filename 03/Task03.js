import React from 'react';
import { Route } from 'react-router-dom';
import Shop from '../src/components/Shop';
import ShopWithCategory from '../src/components/ShopWithCategory.js';
import products from './../src/products.json';

const Task03 = () => {
	return (
		<>
			<h1>Task03</h1>
			<Route exact path='/task03'>
				<Shop products={products} />
			</Route>
			<Route path='/task03/:category'>
				<ShopWithCategory products={products} />
			</Route>
		</>
	);
};

export default Task03;

