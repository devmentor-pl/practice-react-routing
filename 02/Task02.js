import React from 'react';
import { Route } from 'react-router-dom'
import SingleProduct from '../src/components/SingleProduct'

const Task02 = () => {
	return (
		<>
			<h1>Task02</h1>
			<Route path="/task02/product-:id">
				<SingleProduct />
			</Route>
		</>
	)
}

export default Task02;

