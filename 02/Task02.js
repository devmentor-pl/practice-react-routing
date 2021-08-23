import React from 'react';
import {Switch, Route ,useParams} from "react-router-dom";
import products from './../src/products.json';

const Task02 = () => {

	const Product = () => {
		const {id} = useParams();
		const [productList = null] = products.filter((item) => item.id === parseInt(id));

		if (productList === null) {
			return (
				<section>
					<p>Product that you are looking for not exists!</p>
				</section>
			)
		}

		const {name, description, category, price} = productList;

		return (
			<article data-id={id} >
				<h2>{name}</h2>
				<p>Description: {description}</p>
				<p>Category: {category}</p>
				<p>Price: {price}</p>
			</article>
		)
	}

	return (
		<>
			<h1>Task02</h1>
			<Switch>
				<Route path='/task02/product-:id'>
					<Product/>
				</Route>
			</Switch>
		</>
	)
}

export default Task02;

