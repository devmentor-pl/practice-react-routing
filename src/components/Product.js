import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ id, name, price }) => {
	return (
		<>
			<ul>
				<li>
					<Link to={`/task02/product-${id}`}>{name}</Link> <span>{price} zł</span>
				</li>
			</ul>
		</>
	);
};

export default Product;
