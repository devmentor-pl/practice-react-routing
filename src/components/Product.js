import React from "react";
import { Link } from "react-router-dom";

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

export default Product;
