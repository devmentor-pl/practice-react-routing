import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../products.json';

const Product = () => {
  const { id } = useParams();
  const [product = null] = products.filter(
    (item) => item.id === parseInt(id, 10)
  );

  if (!product) {
    return <div>Product not found.</div>;
  }

  const { name, description, category, price } = product;

  return (
    <div>
      <h2>{name}</h2>
      <p>Category: {category}</p>
      <p>Price: {price}</p>
      <p>Description: {description}</p>
    </div>
  );
};

export default Product;
