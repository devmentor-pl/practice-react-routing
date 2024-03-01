import React from "react";
import { useParams, Redirect } from "react-router-dom";
import products from "../data/products.json";

const Product = () => {
  const { id } = useParams();
  const [product = null] = products.filter((prd) => prd.id === parseInt(id));
  if (product === null) {
    return console.log("strona nie istenieje");
  }

  const { title, intro } = product;
  return (
    <article data-id={id}>
      <h1> {title} </h1>
      <p> {intro} </p>
    </article>
  );
};

export default Product;
