import React from "react";

import { useParams } from "react-router-dom";
import products from "./../products.json";

import Product from "./Product";

const ProductPage = () => {
  const { id } = useParams();
  const [product = null] = products.filter((p) => p.id === Number(id));

  if (product === null) {
    return <p>Brak produktu o wybranym id</p>;
  }

  return <Product {...product} />;
};

export default ProductPage;
