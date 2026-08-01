import React from "react";
import { useParams } from "react-router-dom";
import products from "../products.json";

const Product = () => {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <h1>Nie znaleziono produktu</h1>;
  }

  return (
    <section>
      <h2>{product.name}</h2>
      <p>Kat.: {product.category}</p>
      <p>Opis: {product.description}</p>
      <p>Cena: {product.price}</p>
    </section>
  );
};

export default Product;
