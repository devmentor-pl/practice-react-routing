import React from "react";
import Shop from "./Shop";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const ShopWithFilter = props => {
	const { products } = props;

	const { priceMin, priceMax, searchPhrase } = useParams();

	const filterMinPrice = products => {
		return products.filter(product => product.price >= Number(priceMin));
	};

	const filterMaxPrice = products => {
		return products.filter(product => product.price <= Number(priceMax));
	};

	const filterPhrase = products => {
		return products.filter(
			product =>
				product.name.toLowerCase().includes(searchPhrase.toLowerCase()) ||
				product.description.toLowerCase().includes(searchPhrase.toLowerCase())
		);
	};

	let filteredProducts = [...products];

	if (priceMin) {
		filteredProducts = filterMinPrice(filteredProducts);
	}

	if (priceMax) {
		filteredProducts = filterMaxPrice(filteredProducts);
	}

	if (searchPhrase) {
		filteredProducts = filterPhrase(filteredProducts);
	}

	return <Shop products={filteredProducts} />;
};
export default ShopWithFilter;
