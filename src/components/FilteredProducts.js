import React from 'react'
import { useParams } from 'react-router-dom'
import { sortByValueOrName, searchByName } from './../helpers'
import Shop from './Shop'

const FilteredProducts = ({ products, valueData, searchData }) => {
	console.log(searchData)

	return <Shop products={sortByValueOrName(products, valueData[0], valueData[1], searchData)}></Shop>

	// return <Shop products={searchByName(searchData, products)}></Shop>
}

export default FilteredProducts
