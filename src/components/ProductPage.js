import React from 'react'
import StyledProduct from './styled/Product.styled'
import StyledLink from './styled/StyledLink'
import SingleProduct from './SingleProduct'

const Product = ({ name, description, category, price, id }) => {
	const toProduct = {
		pathname: '/task03/product-1',
	}

	return (
		<StyledProduct>
			<h2>{name}</h2>
			<p>{description}</p>
			<p>Category: {category}</p>
			<p>Price: {price}</p>
			{/* <StyledLink to={toProduct}>Zobacz</StyledLink> */}
			<StyledLink to={`task03/product-${id}`}>Zobacz</StyledLink>
		</StyledProduct>
	)
}

export default Product
