import React from 'react';
import products from './../src/products.json';
import Shop from "../src/components/Shop";
import {Route, useHistory, useParams} from 'react-router-dom';
import sortFunction from "../src/helpers/sortFunction";

const Task04 = () => {
	const history = useHistory();
	const sortOptions = [
		{name: 'Sort products', sort: ''},
		{name: 'Highest Price', sort: 'price-desc'},
		{name: 'Lowest Price', sort: 'price-asc'},
	];

	const handleChange = (e) => {
		const {value} = e.target
		history.push(`/task04/${value}`);
	}

	const createOptions = () => {
		return sortOptions.map((item) => (
			<option value={item.sort} key={item.sort}>{item.name}</option>
		));
	}

	const DisplaySortContent = () => {
		const {sortName = ''} = useParams();
		return <Shop products={sortFunction(sortName)} />
	}

	return (
		<>
			<h1>Task04</h1>
			<select onChange={handleChange}>
				{createOptions()}
			</select>
			<Route path={['/task04/:sortName', '/task04/']}>
				<DisplaySortContent/>
			</Route>
		</>
	);
}

export default Task04;

