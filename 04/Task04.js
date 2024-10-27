import React from "react";
import { Route, useHistory } from "react-router-dom";
import Shop from "../src/components/Shop";
import products from "../src/products.json";
const Task04 = () => {
  const history = useHistory();

  const handleChange = (event) => {
    history.push(event.target.value);
  };
  return (
    <>
      <h1>Task04</h1>

      <label for="options">Select a filter:</label>
      <select onChange={(e) => handleChange(e)}>
        <option value="/task04/price-desc">Products descending</option>

        <option value="/task04/price-asc">Products ascending</option>
        <option value="/task04/price-name">Products name</option>
      </select>

      <Route path="/task04/price-desc">
        <Shop list={[...products].sort((a, b) => b.price - a.price)} />
      </Route>
      <Route path="/task04/price-asc">
        <Shop list={[...products].sort((a, b) => a.price - b.price)} />
      </Route>
      <Route path="/task04/price-name">
        <Shop list={[...products].sort((a, b) => a.name - b.name)} />
      </Route>
    </>
  );
};

export default Task04;
