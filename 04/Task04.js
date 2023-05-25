import React from 'react';
import { useHistory, Switch, Route } from "react-router-dom";

import products from "../src/products.json";
import Shop from "../src/components/Shop";

const Task04 = () => {
  const history = useHistory();
  const handleChange = (event) => {
    history.push(`/task04${event.target.value}`);
  };
  const sortedProducts = (order) => {
    if (order === "/task04/price-desc") {
      return products.sort((a, b) => b.price - a.price);
    } else if (order === "/task04/price-asc") {
      return products.sort((a, b) => a.price - b.price);
    }
  };

  console.log(history.location.pathname);

  return (
    <>
      <h1>Task04</h1>
      <select onChange={handleChange}>
        <option value="">Sortuj</option>
        <option value="/price-desc">Cena malejąco</option>
        <option value="/price-asc">Cena rosnąco</option>
      </select>
      <Switch>
        <Route path="/task04">
          <Shop products={products} />
        </Route>
        <Route path="/task04/:order">
          <Shop products={sortedProducts(history.location.pathname)} />
        </Route>
      </Switch>
    </>
  );
};

export default Task04;

