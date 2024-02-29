import React, { useEffect } from 'react'
import Product from './Product'
import { Redirect } from 'react-router-dom'
import StyledSection from './styled/Section.styled'

const Shop = ({ products }) => {

	// if (products.length === 0) {
	// 	return <Redirect to="/404.html" />
	// }

	return (
		<StyledSection>
			{products.map(prod => (
				<Product key={prod.id} {...prod} />
			))}
		</StyledSection>
	)
}

export default Shop