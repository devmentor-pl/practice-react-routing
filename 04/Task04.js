import React, { useEffect, useState } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import Shop from '../src/components/Shop'
import SortedProducts from '../src/components/SortedProducts'
import products from '../src/products.json'

const Task04 = () => {
	const history = useHistory()
	const [selected, setSelected] = useState('')

	const handleChange = event => {
		setSelected(event.target.value)
		history.push(event.target.value)
		console.log(event.target.value)
	}

	return (
		<>
			<h1>Task04</h1>

			<select value={selected} onChange={handleChange}>
				<option disabled={true} value="">
					Sortuj
				</option>
				<option value="/task04/price-desc">Cena Malejąco</option>
				<option value="/task04/price-asc">Cena Rosnąco</option>
			</select>
			<Switch>
				<Route exact path="/task04">
					<Shop products={products} selected={selected} />
				</Route>
				<Route path="/task04/:alias">
					<SortedProducts products={products} selected={selected} />
				</Route>
			</Switch>
		</>
	)
}

export default Task04
