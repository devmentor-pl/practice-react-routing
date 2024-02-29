import React from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { searchById } from './../helpers'
import products from './../products.json'
import Shop from './Shop'

const SingleProduct = () => {
	const { id } = useParams()
	return <Shop products={searchById(id, products)} />
}

export default SingleProduct
