import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { productId } = useParams();

  const products = [
    {
      id: 1,
      name: 'Name 1',
      description: 'Description for product 1',
    },
    {
      id: 2,
      name: 'Name 2',
      description: 'Description for product 2',
    },
    {
      id: 3,
      name: 'Name 3',
      description: 'Description for product 3',
    },
  ];

  const product = products.find((product) => product.id === Number(productId));

  if (!product) {
    return <div>Product not found.</div>;
  }
  return (
    <div>
      <h2>{product.name}</h2>
      <p>ID: {product.id}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default Product;
