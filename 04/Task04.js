import React from "react";
import { HashRouter as Router, Route, useHistory } from "react-router-dom";
import products from "./../src/products.json";
import Shop from "../src/components/Shop";

const Task04 = () => {
  const history = useHistory();

  const onChangeSelect = (e) => {
    const value = e.target.value;

    history.push(`/task04/:${value}`);
  };

  const selectComponent = () => {
    return (
      <>
      <select onChange={onChangeSelect}>
            <option value="price-asc">od najtańszego</option>
            <option value="price-desc">od najdroższego</option>
        </select>
        </>
    );
  };

  return (
    <Router>
      <h1>Task04</h1>
      {selectComponent()}
      <Route path={"/task04/:price-asc"}>
        <Shop products={[...products].sort((a, b) => a.price - b.price)}></Shop>
      </Route>

      <Route path={"/task04/:price-desc"}>
        <Shop products={[...products].sort((a, b) => b.price - a.price)}></Shop>
      </Route>
    </Router>
  );
};

export default Task04;
