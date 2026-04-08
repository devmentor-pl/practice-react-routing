import React from 'react';
import Product from './Product';
import { useParams, Link } from 'react-router-dom';

const Shop = ({ products: propsProducts }) => {
	const {
		cat = null,
		sort = null,
		minPrice = null,
		maxPrice = null,
		search = null,
	} = useParams();

	if (sort === 'price-asc') {
		propsProducts.sort((a, b) => a.price - b.price);
	}

	if (sort === 'price-desc') {
		propsProducts.sort((a, b) => b.price - a.price);
	}

	let products = propsProducts.filter(
		(prod) =>
			cat?.toLowerCase() === prod.category.toLowerCase() || cat === null,
	);

	if (minPrice != null && maxPrice != null && search != null) {
		products = propsProducts.filter(
			(prod) =>
				(minPrice == ' ' ? true : prod.price >= minPrice) &&
				(maxPrice == ' ' ? true : prod.price <= maxPrice) &&
				(search == ' '
					? true
					: prod.name.toLowerCase().includes(search.toLowerCase())),
		);
	}

	return (
		<section>
			{products.map((p) => (
				<Link key={p.id} to={`/task02/product-${p.id}`}>
					<Product {...p} />
				</Link>
			))}
		</section>
	);
};

export default Shop;
