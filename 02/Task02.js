import React from 'react';
import products from "./../src/products.json";
import { useParams, Redirect } from "react-router-dom";

const Task02 = () => {
  const { id } = useParams();
  const [product = null] = products.filter(
    (product) => product.id === parseInt(id)
  );
  console.log(products);
  if (product === null) {
    return <Redirect to="/404.html" />;
  }

  const { name, description, category, price } = product;

  return (
    <>
      <h1>Task02</h1>
      <article data-id={id}>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>{category}</p>
        <p>{price}</p>
      </article>
    </>
  );
};

export default Task02;

