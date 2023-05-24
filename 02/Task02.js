import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Product from "../src/components/Product";

const Task02 = () => {
  return (
    <>
      <h1>Task02</h1>
      <Router>
        <Switch>
          <Route path="/task02/product-:id">
            <Product />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Task02;

