import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Product from '../src/components/Product';

const Task02 = () => {
	return (
		<>
			<h1>Task02</h1>
			<Switch>
				<Route path='/task02/product-:id'>
					<Product />
				</Route>
			</Switch>
		</>
	);
};

export default Task02;
