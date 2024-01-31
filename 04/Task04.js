import React, { useEffect, useState } from "react";
import { useHistory, Switch, Route } from "react-router-dom";

import products from "../src/products.json";
import Shop from "../src/components/Shop";

const Task04 = () => {
  const history = useHistory();
  const [sortedProducts, setSortedProducts] = useState(products);

  const handleChange = (event) => {
    history.push(`/task04${event.target.value}`);
  };

  const orderOptions = {
    "/task04/price-desc": [...products].sort((a, b) => b.price - a.price),
    "/task04/price-asc": [...products].sort((a, b) => a.price - b.price),
  };

  useEffect(() => {
    const order = history.location.pathname;
    setSortedProducts(() => {
      if (orderOptions[order]) return orderOptions[order];
      else return products;
    });
  }, [history.location.pathname]);

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
          <Shop products={sortedProducts} />
        </Route>
      </Switch>
    </>
  );
};

export default Task04;
