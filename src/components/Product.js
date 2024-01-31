import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Product = (props) => {
  const { id, name, description, category, price } = props;
  const location = useLocation();

  const isTask03 = location.pathname.startsWith('/task03');

  return (
    <div>
      <h2>{name}</h2>
      {isTask03 && (
        <Link to={`/task02/product-${id}`}>View Product Details</Link>
      )}
      <p>Category: {category}</p>
      <p>Price: {price}</p>
      <p>Description: {description}</p>
    </div>
  );
};

export default Product;
