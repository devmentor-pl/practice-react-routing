import React from "react";
import { useParams, Redirect } from "react-router-dom";

import products from "../products.json";

function Product(propsProduct) {
  const { id } = useParams();

  const [product = null] = products.filter(
    (product) => product.id === parseInt(id)
  );

  if (product === null && Object.entries(propsProduct).length === 0)
    return <Redirect to="/404.html" />;

  const getPropsProduct = () => {
    const { name, description, price, category } = propsProduct;

    return (
      <>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>Cena: {price}</p>
        <p>Kategoria: {category}</p>
      </>
    );
  };

  const getProduct = () => {
    const { name, description, price, category } = product;

    return (
      <>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>Cena: {price}</p>
        <p>Kategoria: {category}</p>
      </>
    );
  };

  const renderProduct = () =>
    Object.entries(propsProduct).length > 0 ? getPropsProduct() : getProduct();

  return <article>{renderProduct()}</article>;
}

export default Product;
