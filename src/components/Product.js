import React from "react";

const Product = (props) => {
  const { name, description, category, price } = props;
  console.log(name);
  return (
    <ul>
      <li>
        {name} {description} {category} {price}
      </li>
    </ul>
  );
};

export default Product;
