import React from 'react';
import { Link, Route } from 'react-router-dom';
import products from './../src/products.json';
import Shop from '../src/components/Shop';

const Task03 = () => {
	const categories = [...new Set(products.map((p) => p.category))];
	const nav = categories.map((item) => {
		return (
			<li key={item}>
				<Link to={`/task03/${item.toLowerCase()}`}>{item}</Link>
			</li>
		);
	});

	const routes = categories.map((category) => {
		const prodCat = products.filter((product) => product.category === category);

		return (
			<Route
				key={category}
				path={`/task03/${category.toLowerCase()}`}
			>
				<h3>{category}</h3>
				{prodCat.map((prod) => {
					return (
						<Shop
							key={prod.id}
							products={[prod]}
						/>
					);
				})}
			</Route>
		);
	});

	return (
		<>
			<h1>Task03</h1>
			Categories:
			{nav}
			{routes}
		</>
	);
};

export default Task03;