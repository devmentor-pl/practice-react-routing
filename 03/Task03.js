import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import products from "./../src/products.json";
import Shop from "./../src/components/Shop";
import { useParams } from "react-router-dom";

const Task03 = () => {
  const CategoryComponent = () => {
    const { category } = useParams();

    return (
      <Shop
        products={products.filter(
          (p) => p.category.toLowerCase() === category.toLowerCase()
        )}
      ></Shop>
    );
  };

  return (
    <Router>
      <h1>Task03</h1>

      <Route
        exact
        path="/task03/:category"
        component={CategoryComponent}
      ></Route>
    </Router>
  );
};

export default Task03;
