import React from 'react';
import { Route, useHistory } from "react-router-dom";
import products from "./../src/products.json";
import Shop from "../src/components/Shop";
const Task04 = () => {
  const history = useHistory();

  const handleChange = (e) => {
    const selectValue = e.target.value;
    history.push(`/task04/${selectValue}`);
  };
  return (
    <>
      <h1>Task04</h1>
      <select onChange={handleChange}>
        <option value="">filter</option>
        <option value="price-asc">rosnaca</option>
        <option value="price-desc">malejąco</option>
      </select>
      <Route path="/task04/price-asc">
        <Shop products={[...products].sort((a, b) => a.price - b.price)} />
      </Route>
      <Route path="/task04/price-desc">
        <Shop products={[...products].sort((a, b) => b.price - a.price)} />
      </Route>
    </>
  );
};

export default Task04;

