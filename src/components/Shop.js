import React from 'react';
import Product from './Product';

const Shop = ({ products }) => {
  if (products.length === 0) {
    return (
      <section>
        <p>No matching products found.</p>
      </section>
    );
  }
  return (
    <section>
      {products.map((p) => (
        <Product key={p.id} {...p} />
      ))}
    </section>
  );
};

export default Shop;
