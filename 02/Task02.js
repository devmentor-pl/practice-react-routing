import React from 'react';
import { Route, Link, useParams } from "react-router-dom";
import products from "./../src/products.json";

const Product = () => {
  const { id } = useParams();
  const [product] = products.filter((item) => item.id === Number(id));
  const { name, description, category, price } = product;

  return (
    <article>
      <h2>{name}</h2>
      <h3>{description}</h3>
      <h3>{category}</h3>
      <h3>{price}</h3>
    </article>
  );
};

const Task02 = () => {
  return (
    <>
      <h1>Task02</h1>
      <Route path="/task02/product-:id">
        <Product />
      </Route>
    </>
  );
};

export default Task02;

