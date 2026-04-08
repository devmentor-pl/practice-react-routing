import React from 'react';

import products from './../src/products.json';
import Shop from '../src/components/Shop';
import { Route, Switch, Link } from 'react-router-dom';

const Task03 = () => {
	const categories = [...new Set(products.map((prod) => prod.category))];
	const nav = (
		<nav>
			<ul>
				<li>
					<Link to={`/task03`}>All categories</Link>
				</li>
				{categories.map((cat) => (
					<li>
						<Link to={`/task03/${cat}`}>{cat}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
	return (
		<>
			<h1>Task03</h1>
			{nav}
			<Switch>
				<Route path="/task03/:cat">
					<Shop products={products} />
				</Route>
				<Route path="/task03">
					<Shop products={products} />
				</Route>
			</Switch>
		</>
	);
};

export default Task03;
