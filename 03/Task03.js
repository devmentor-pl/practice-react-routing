import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Shop from '../src/components/Shop'
import ProductsByCategory from '../src/components/ProductsByCategory'
import SingleProduct from '../src/components/SingleProduct'
import products from './../src/products.json'

const Task03 = () => {
	const routes = [
		{ url: '/task03/', text: 'Wszytko' },
		{ url: '/task03/react', text: 'React' },
		{ url: '/task03/javascript', text: 'JavaScript' },
	]

	return (
		<>
			<h1>Task03</h1>
			<nav>
				<ul>
					{routes.map((item, index) => (
						<li key={index}>
							<Link to={item.url}>{item.text}</Link>
						</li>
					))}
				</ul>
			</nav>
			<Switch>
				<Route exact path="/task03">
					<Shop products={products} />
				</Route>
				<Route path="/task03/:alias">
					<ProductsByCategory />
				</Route>
				<Route path="/task03/product-:id">
					<SingleProduct />
				</Route>
			</Switch>
		</>
	)
}

export default Task03
