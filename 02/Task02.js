import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Product from "../src/components/Product";

import products from "./../src/products.json";

const Task02 = () => {
  return (
    <Router>
      <h1>Task02</h1>
      <Switch>
        <Route
          path="/task02/product-:id"
          render={props => {
            const { id } = props.match.params;
            const product = products.find(p => p.id === +id);

            return <Product {...product} />;
          }}
        ></Route>
      </Switch>
    </Router>
  );
};

export default Task02;
