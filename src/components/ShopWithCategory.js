import React from "react";
import { Redirect, useParams } from "react-router-dom/cjs/react-router-dom.min";
import Shop from "./Shop";

const ShopWithCategory = props => {
	const { products } = props;

	const { category } = useParams();

	const filteredProducts = products.filter(product => {
		return product.category.toLowerCase() === category.toLowerCase();
	});

	return filteredProducts.length > 0 ? (
		<Shop products={filteredProducts} />
	) : (
		<Redirect to='/404.html' />
	);
};

export default ShopWithCategory;
