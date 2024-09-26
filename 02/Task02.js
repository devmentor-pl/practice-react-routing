import React from "react";
import { useParams } from "react-router-dom";
import { HashRouter as Router, Route } from "react-router-dom";
import products from "../src/products.json";

const Task02 = () => {

  const ProductComponent = () => {
    const { id } = useParams();
    const [product] = products.filter((prod) => prod.id === parseInt(id));
 
    return (
      <section>
        <p>{product.name}</p>
      </section>
    );

  };
  return (
    <Router>
      <h1>Task02</h1>
      <Route
        exact
        path="/task02/product-:id"
        component={ProductComponent}
      ></Route>
    </Router>
  );
};

export default Task02;
