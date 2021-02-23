import React from 'react';
import { v4 as uuid } from 'uuid';
import { Route, NavLink, Link} from 'react-router-dom';
import Shop from '../src/components/Shop'
import products from './../src/products.json';

const productsWithLinks = products.map((product) => {
		return {
			...product,
			link: `#/task02/product-${product.id}`,
		};
	});
	
function filterByCategory(category) {
	return productsWithLinks.filter(
		(prod) => prod.category.toLowerCase() === category
	);
}

const ShopWithCategory = ({ match }) => {
	const { category } = match.params;
	return <Shop products={filterByCategory(category)} />;
};

const Task03 = () => {
	const categories = getCategories();
	const activeStyle = { color: '#333' };

	function getCategories() {
		const allCategories = products.map((prod) => prod.category);
		const categoriesNotDuplicated = new Set(allCategories);
		const categories = [];
		categoriesNotDuplicated.forEach((category) => {
			const categoryData = { name: category.toLowerCase(), key: uuid() };
			categories.push(categoryData);
		});
		return categories;
	}

	function createNavLinks() {
		return categories.map(({ name, key }) => {
			return (
				<li key={key}>
					<NavLink activeStyle={activeStyle} to={`/task03/${name}`}>
						{name}
					</NavLink>
				</li>
			);
		});
	}

	return (
		<>
			<h1>Task03</h1>
			<nav>
				<ul>{createNavLinks()}</ul>
			</nav>
			<Route exact path="/task03/">
				<Shop products={productsWithLinks} />
			</Route>
			<Route path="/task03/:category" component={ShopWithCategory} />
			<Link to="/task03">{'<<< ' + 'Go to main page'}</Link>
		</>
	);
};

export default Task03;

