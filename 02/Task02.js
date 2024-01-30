import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';

import ProductRouter from '../src/components/ProductRouter';
const Task02 = () => {
	const links = [
		{ url: '/task02/product-1', text: 'product-1' },
		{ url: '/task02/product-2', text: 'product-2' },
		{ url: '/task02/product-3', text: 'product-3' },
		{ url: '/task02/product-4', text: 'product-4' },
		{ url: '/task02/product-5', text: 'nieistniejący produkt' },
	];
	return (
		<Router>
			<h1>Task02</h1>
			<p>jakby sie nie chcialo wpisywac recznie vvv</p>
			<ul>
				{links.map((link) => {
					return (
						<li key={link.url}>
							<Link to={link.url}>{link.text}</Link>
						</li>
					);
				})}
			</ul>
			<Switch>
				<Route path='/task02/product-:id'>
					<ProductRouter version='full' />
				</Route>
			</Switch>
		</Router>
	);
};

export default Task02;

