import React from 'react';
import { Redirect, useParams } from "react-router-dom";

import products from "./../products.json";

const Product = (props) => {
  const { alias } = useParams();

  if (alias === undefined) {
    return (
      <article>
        <h3>{props.name}</h3>
        <p>ID: {props.id}</p>
        <p>{props.category}</p>
        <h4>{props.price} zł</h4>
        <p>{props.description}</p>
      </article>
    );
  }

  const [product = null] = products.filter(({ id, name }) => {
    return (
      id === parseInt(id) && name.replace(": ", "+").toLowerCase() === alias
    );
  });

  if (product === null) {
    return <Redirect to="/404.html" />;
  }

  return (
    <article>
      <h3>{product.name}</h3>
      <p>ID: {product.id}</p>
      <p>{product.category}</p>
      <h4>{product.price} zł</h4>
      <p>{product.description}</p>
    </article>
  );
};

export default Product;