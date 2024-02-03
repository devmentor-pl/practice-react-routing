import React, { useState } from "react";
import { Route, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import products from "./../src/products.json";
import ShopWithFilter from "../src/components/ShopWithFilter";
import Shop from "../src/components/Shop";

const Task05 = () => {
	const initialState = {
		priceMin: "",
		priceMax: "",
		searchPhrase: "",
	};

	const [state, setState] = useState(initialState);
	const history = useHistory();

	const handleSubmit = e => {
		e.preventDefault();

		const { priceMin, priceMax, searchPhrase } = state;

		if (priceMin || priceMax || searchPhrase) {
			history.push(`/task05/${priceMin},${priceMax}-${searchPhrase}`);
		} else {
			history.push("/task05");
		}
	};

	return (
		<>
			<h1>Task05</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor='priceMin'>
					Min price
					<input
						name='priceMin'
						value={state.priceMin}
						type='number'
						onChange={e =>
							setState({ ...state, priceMin: e.target.value })
						}></input>
				</label>
				<label htmlFor='priceMax'>
					Max price
					<input
						name='priceMax'
						value={state.priceMax}
						type='number'
						onChange={e =>
							setState({ ...state, priceMax: e.target.value })
						}></input>
				</label>
				<label htmlFor='searchPhrase'>
					Search phrase
					<input
						name='searchPhrase'
						value={state.searchPhrase}
						type='text'
						onChange={e =>
							setState({ ...state, searchPhrase: e.target.value })
						}></input>
				</label>
				<button type='submit'>search</button>
			</form>
			<Route path='/task05/:priceMin?,:priceMax?-:searchPhrase?'>
				<ShopWithFilter products={products} />
			</Route>
			<Route exact path='/task05'>
				<Shop products={products} />
			</Route>
		</>
	);
};

export default Task05;
