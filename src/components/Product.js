import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ id, name, description, category, price, version }) => {
	return (
		<>
			<ul>
				<li>
					{version === 'full' ? (
						<>
							<h2>Product: {name}</h2>
							<p>Category: {category}</p>
							<p>Description: {description}</p>
							<p>Price: {price} zł</p>
						</>
					) : (
						<>
							<Link to={`/task02/product-${id}`}>{name}</Link>
							<span>{price} zł</span>
						</>
					)}
				</li>
			</ul>
		</>
	);
};

export default Product;