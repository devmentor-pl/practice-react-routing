import React from 'react';
import Product from './Product';

const Shop = ({ products }) => {
  console.log('shop', products);
  return products.map((p) => <Product key={p.id} {...p} />);
};

export default Shop;