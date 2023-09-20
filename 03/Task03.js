import React from 'react';
import {
	Route,
	useParams,
	Redirect,
	Link,
} from 'react-router-dom/cjs/react-router-dom.min';

import Shop from '../src/components/Shop';
import products from './../src/products.json';

const CategoryPage = () => {
	const { category } = useParams();

	const productsWithCategory = products.filter(
		(p) => p.category.toLowerCase() === category.toLowerCase()
	);

	if (productsWithCategory.length === 0) {
		return <Redirect to='/404' />;
	}

	return <Shop products={productsWithCategory} />;
};

const Task03 = () => {
	return (
		<>
			<h1>Task03</h1>
			<ul>
				<li>
					<Link to='/task03/javascript'>JavaScript</Link>
				</li>
				<li>
					<Link to='/task03/react'>React</Link>
				</li>
			</ul>
			<Route
				exact
				path='/task03'>
				<Shop products={products} />
			</Route>
			<Route
				exact
				path='/task03/:category'>
				<CategoryPage />
			</Route>
		</>
	);
};

export default Task03;
