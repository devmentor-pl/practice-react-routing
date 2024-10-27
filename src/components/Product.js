import React from 'react';
import {Link, Route, useParams} from 'react-router-dom'
import products from './../products.json'



const Product = (props) => {
  const { name, description, category, price, id } = props;

  return (
    <>
      <h2>
        <Link to={`/task02/product-${id}`}> {name}</Link>
      </h2>

      <p>Description: {description}</p>
      <p>Category: {category}</p>
      <p>Price: {price}</p>
    </>
  );
};

export default Product;