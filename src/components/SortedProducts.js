import React from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { sortLowToHigh, sortHighToLow } from './../helpers'

import Shop from './Shop'

const SortedProducts = ({ products }) => {
	const { alias } = useParams()

	if (alias === 'price-desc') {
		return <Shop products={sortLowToHigh(products)} />
	} else if (alias === 'price-asc') {
		return <Shop products={sortHighToLow(products)} />
	}
}

export default SortedProducts
