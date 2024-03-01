import React from 'react';
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import Product from "../src/components/Product";
const Task02 = () => {
  return (
    <Router>
      <div>
        <h1>Task02</h1>
        <Switch>
            <Route path='/task02/product-:id'>
                <Product />
            </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Task02;

