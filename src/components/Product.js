import React from "react";
import { useParams, Redirect } from "react-router-dom";
import products from "./../products.json";

const Product = () => {
	const { id } = useParams();
	console.log(products[0].id);

	const [product = null] = products.filter(product => {
		return product.id === parseInt(id);
	});

	if (product === null) {
		return <Redirect to='/task02' />;
	}

	return (
		<article data-id={id}>
			<h2>Name: {product.name}</h2>
			<p>Description: {product.description}</p>
			<p>Category: {product.category}</p>
			<p>Price: {product.price}</p>
		</article>
	);
};

export default Product;
