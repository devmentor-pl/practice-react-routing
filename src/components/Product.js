import React from "react";
import { useParams, Redirect } from "react-router-dom";

import products from "../products.json";

function Product() {
  const { id } = useParams();
  const [product = null] = products.filter(
    (product) => product.id === parseInt(id)
  );

  if (product === null) return <Redirect to="/404.html" />;

  const { name, description, category, price } = product;

  return (
    <section>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Cena: {price}</p>
      <p>Kategoria: {category}</p>
    </section>
  );
}

export default Product;
