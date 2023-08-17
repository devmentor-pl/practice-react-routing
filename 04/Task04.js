import React, { useState } from "react";
import { Route, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import products from "./../src/products.json";
import Shop from "../src/components/Shop";

const Task04 = () => {
	const history = useHistory();

	const handleChange = e => {
		const value = e.target.value;

		const priceSort = ["desc", "asc"];

		if (priceSort.includes(value)) {
			history.push(`/task04/price-${value}`);
		} else {
			history.push("/404.html");
		}
	};

	return (
		<>
			<h1>Task04</h1>
			<select onChange={handleChange}>
				<option value=''>Sortuj</option>
				<option value='desc'>Cena malejąco</option>
				<option value='asc'>Cena rosnąco</option>
			</select>
			<Route path='/task04/price-desc'>
				<Shop products={products.slice().sort((a, b) => b.price - a.price)} />
			</Route>
			<Route path='/task04/price-asc'>
				<Shop products={products.slice().sort((a, b) => a.price - b.price)} />
			</Route>
		</>
	);
};

export default Task04;
