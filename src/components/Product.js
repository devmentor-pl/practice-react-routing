import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ id, name, description, category, price }) => {
	return (
		<>
			<ul>
				<li>
					<Link to={`/task02/product-${id}`}>{name}</Link>
				</li>
			</ul>
		</>
	);
};

export default Product;
