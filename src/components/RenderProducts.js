import React from "react";
import { Link } from "react-router-dom";

const RenderProduct = ({ id, name, description, category, price }) => {
  return (
    <article>
      <h2>
        <Link to={`/task02/product-${id}`}>{name}</Link>
      </h2>
      <h3>{description}</h3>
      <h3>{category}</h3>
      <h3>{price}</h3>
    </article>
  );
};

export default RenderProduct;
