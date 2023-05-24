import React from "react";
import { Route } from "react-router-dom";

// import products from "../products.json";
import categories from '../categories.json'

function Product({ name, description, category, price }) {
  return (
    <article>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Cena: {price}</p>
      <p>Kategoria: {category}</p>
    </article>
  );
}

export default Product;
