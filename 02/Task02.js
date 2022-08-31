import React from 'react';

import { Route, Link } from "react-router-dom";
import Product from "../src/components/Product";

import products from "./../src/products.json";

const Task02 = () => {
  const renderProductsList = () => {
    return (
      <ul>
        {products.map(({ id, name, description, category, price }) => (
          <li key={id}>
            <Link to={`/task02/${id}-${name.replace(": ", "+").toLowerCase()}`}>
              <h3>{name}</h3>
            </Link>
            <p>ID: {id}</p>
            <p>{category}</p>
            <h4>{price} zł</h4>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <h1>Task02</h1>
      {renderProductsList()}
      <Route path="/task02/:id-:alias">
        <Product />
      </Route>
    </>
  );
};



export default Task02;

