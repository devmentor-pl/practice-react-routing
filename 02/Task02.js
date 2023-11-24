import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Product from '../src/components/Product';
import NotFound from '../src/components/NotFound';

const Task02 = () => {
	return (
		<Router>
			<h1>Task02</h1>
			<p>jakby sie nie chcialo wpisywac recznie vvv</p>
			<ul>
				<li>
					<Link to='/task02/product-1'>product-1</Link>
				</li>
				<li>
					<Link to='/task02/product-2'>product-2</Link>
				</li>
				<li>
					<Link to='/task02/product-3'>product-3</Link>
				</li>
				<li>
					<Link to='/task02/product-4'>product-4</Link>
				</li>
				<li>
					<Link to='/task02/product-5'>nieistniejący produkt</Link>
				</li>
			</ul>

			<Switch>
				<Route path='/task02/:product-:id'>
					<Product />
				</Route>
				<Route path='/task02/404.html'>
					<NotFound />
				</Route>
			</Switch>
		</Router>
	);
};

export default Task02;

