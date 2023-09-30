import React from 'react';
import { Route, Link } from 'react-router-dom';

import products from './../src/products.json';
import CategoryPage from '../src/components/CategoryPage';

const Task03 = () => {
	const uniqueCategories = [
		...new Set(products.map((product) => product.category.toLowerCase())),
	];
	return (
		<>
			<h1>Task03</h1>
			<h3>Categories:</h3>
			{uniqueCategories.map((category) => (
				<div key={category} style={{ margin: '10px', display: 'inline-block' }}>
					<Link to={`/task03/${category}`}>
						{category.charAt(0).toUpperCase() + category.slice(1)}
					</Link>
				</div>
			))}
			<Route exact path="/task03">
				<CategoryPage products={products} />
			</Route>
			<Route path="/task03/:category">
				<CategoryPage products={products} />
			</Route>
		</>
	);
};

export default Task03;

