import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import products from "./../products.json";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const Product = props => {
	const { id } = useParams();

	const [product = null] = products.filter(product => {
		return product.id === parseInt(id);
	});

	if (product === null && Object.keys(props).length === 0) {
		return <Redirect to='/404.html' />;
	}

	const getProducts = () => {
		const { name, description, price, category } = product;
		return (
			<article data-id={id}>
				<h2>Name: {name}</h2>
				<p>Description: {description}</p>
				<p>Category: {category}</p>
				<p>Price: {price}</p>
			</article>
		);
	};

	const getPropsProducts = () => {
		const { name, description, price, category } = props;
		return (
			<article>
				<h2>Name: {name}</h2>
				<p>Description: {description}</p>
				<p>Category: {category}</p>
				<p>Price: {price}</p>
			</article>
		);
	};

	return Object.keys(props).length === 0 ? getProducts() : getPropsProducts();
};

export default Product;
