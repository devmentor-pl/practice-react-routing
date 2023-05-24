import React from "react";
import { Route } from "react-router-dom";

import Product from "./Product";
import categories from "../categories.json";

const Shop = ({ products }) => {
  const routes = categories.map((category) => {
    const productsCategories = products.filter((product) =>
      product.category.includes(category.text)
    );

    return (
      <Route key={category.url} exact path={category.url}>
        <h3>{category.text}</h3>
        {category.text === "All"
          ? products.map((product) => <Product key={product.id} {...product} />)
          : productsCategories.map((product) => (
              <Product key={product.id} {...product} />
            ))}
      </Route>
    );
  });

  return <section>{routes}</section>;
};

export default Shop;
