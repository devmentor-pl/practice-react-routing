import React from 'react';
import {Route, useParams} from 'react-router-dom';
import products from './../src/products.json';
import Shop from "../src/components/Shop";

const Task03 = () => {
	const productsURL = products.map((item) => {
		return {
			...item,
			url: `/task02/product-${item.id}`
		}
	});

	const DisplayContent = () => {
		const {cat = ''} = useParams();
		const filteredProductList = productsURL.filter(product => {

			switch (cat) {
				case 'javascript':
					return product.category === 'JavaScript'
				case 'react':
					return product.category === 'React'
				case '':
					return true
				default:
					return false
			}
		});

		return <Shop products={filteredProductList} />
	}

	return (
		<>
			<h1>Task03</h1>
			<Route path={['/task03/:cat', '/task03/']}>
				<DisplayContent/>
			</Route>
		</>
	);
}

export default Task03;

