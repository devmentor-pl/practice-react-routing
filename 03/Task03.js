import React from "react";
import { Switch, Route, useParams } from "react-router-dom";

import products from "./../src/products.json";
import Shop from "../src/components/Shop";

const ProductsList = () => {
  const { slug } = useParams();

  const filteredProducts = slug
    ? products.filter((p) => p.category.toLowerCase() === slug.toLowerCase())
    : products;

  return <Shop products={filteredProducts} />;
};

const Task03 = () => {
  return (
    <Switch>
      <Route exact path="/task03/:slug?" component={ProductsList} />
    </Switch>
  );
};

export default Task03;
