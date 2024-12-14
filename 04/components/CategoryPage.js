import React from 'react';
import Product from './Product';
import { useParams } from 'react-router-dom';
import NotFound from './NotFound';

const CategoryPage = ({ products = [] }) => {
  const { category } = useParams();
  const filteredProducts = category
    ? products.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    )
    : products;

  if (!filteredProducts.length) {
    return <NotFound />;
  }
  return (
    <section>
      {filteredProducts.map((p) => (
        <Product key={p.id} {...p} />
      ))}
    </section>
  );
};

export default CategoryPage;