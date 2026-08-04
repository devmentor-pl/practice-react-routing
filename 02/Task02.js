import React from "react";
import { Switch, Route } from "react-router-dom";
import Product from "../src/components/Product";

const Task02 = () => {
  return (
    <Switch>
      <Route exact path="/task02/product-:id" component={Product} />
    </Switch>
  );
};

export default Task02;
