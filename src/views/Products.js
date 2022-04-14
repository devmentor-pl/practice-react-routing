import React from 'react';
import { Redirect, useParams } from 'react-router-dom';

import products from '../products.json';

const Products = () => {
  const { alias, id } = useParams();

  const [product = null] = products.filter((prod) => prod.id === parseInt(id));

  if (product === null) {
    return <Redirect to='/404.html' />;
  }

  const { name, description, category } = product;

  return (
    <article data-alias={alias} data-id={id}>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>kategoria: {category}</p>
    </article>
  );
};

export default Products;
