import React from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { searchByCategory } from './../helpers'
import products from './../products.json'
import Shop from './Shop'

const ProductsByCategory = () => {
	const { alias } = useParams()
	return <Shop products={searchByCategory(alias, products)} />
}

export default ProductsByCategory
