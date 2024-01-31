import React from 'react';

import products from './../src/products.json';
import Shop from "../src/components/Shop";
import { Switch, Route } from "react-router-dom";
import ShopCategory from "../src/components/ShopCategory";

const Task03 = () => {
  return (
    <>
      <h1>Task03</h1>
      <Switch>
        <Route exact path="/task03">
          <Shop products={products} />
        </Route>
        <Route path="/task03/:category">
          <ShopCategory products={products} />
        </Route>
      </Switch>
    </>
  );
};

export default Task03;

