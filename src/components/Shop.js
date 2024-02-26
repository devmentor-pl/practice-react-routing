import React from 'react';
import Product from './Product';

const Shop = ({ products }) => {
	console.log(products)
	return (
		<section>
			{products.map(prod => (
				<Product key={prod.id} {...prod} />
			))}
		</section>
	)
}

export default Shop;
