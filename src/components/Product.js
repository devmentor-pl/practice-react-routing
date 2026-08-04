import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "../products.json";

const Product = ({ id, name, category, description, price }) => {
  const { id: routeId } = useParams();

  // for exc.2
  if (id) {
    return (
      <section>
        <h2>
          <Link to={`/task02/product-${id}`}>{name}</Link>
        </h2>
        <p>Kat.: {category}</p>
        <p>Opis: {description}</p>
        <p>Cena: {price}</p>
      </section>
    );
  }

  // for exc.3
  const product = products.find((item) => item.id === Number(routeId));

  if (!product) {
    return <h1>Nie znaleziono produktu</h1>;
  }

  return (
    <section>
      <h2>{product.name}</h2>
      <p>Kategoria: {product.category}</p>
      <p>Opis: {product.description}</p>
      <p>Cena: {product.price} zł</p>
    </section>
  );
};

export default Product;
