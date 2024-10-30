import React from 'react';
import { Route, useHistory } from "react-router-dom";

import Shop from "../src/components/Shop";
import products from "../src/products.json";

const Task04 = () => {
  const history = useHistory();

  const handleChange = (e) => {
    history.push(`/task04/${e.target.value}`);
  };

  return (
    <>
      <h1>Task04</h1>

      <select onChange={handleChange} defaultValue={"none"}>
        <option value="none">Wybierz sortowanie</option>
        <option value="price-asc">Od najtańszego</option>
        <option value="price-desc">Od najdroższego</option>
      </select>

      <Route path="/task04/price-asc">
        <Shop list={[...products].sort((a, b) => a.price - b.price)} />
      </Route>

      <Route path="/task04/price-desc">
        <Shop list={[...products].sort((a, b) => b.price - a.price)} />
      </Route>
    </>
  );
};

export default Task04;

