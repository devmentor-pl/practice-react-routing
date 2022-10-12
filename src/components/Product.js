import React from "react";
import products from "../products.json";
import { Redirect, useParams, Link } from "react-router-dom";

const Product = ({ name, description, price, link = null }) => {
  const productTitle = link === null ? name : <Link to={link}>{name}</Link>;

  return (
    <article>
      <h3>{productTitle}</h3>
      <h4>{price}</h4>
      <p>{description}</p>
    </article>
  );
};


const ProductPage = () => {
  const { id } = useParams();
  const product = products[id];
  const link = `/task02/product-${id}`;

  if (!product) return <Redirect to="/404" />;

  return <Product {...product} link={link} />;
};

export { Product, ProductPage };
