import React from 'react';
import { useHistory, Route, Switch } from "react-router-dom";
import Shop from "../src/components/Shop";
import products from "../src/products.json";

const Task04 = () => {
  const history = useHistory();

  const currentOption = history.location.pathname.replace("/task04/", "");

  const getItemsAscending = () => {
    return [...products].sort((a, b) => a.price - b.price);
  };

  const getItemsDescending = () => {
    return [...products].sort((a, b) => b.price - a.price);
  };

  const selectFilter = (e) => {
    const selectedOption = e.target.value;

    history.push(`/task04/${selectedOption}`);

    if (selectedOption === "all") history.push("/task04");
  };

  return (
    <>
      <h1>Task04</h1>

      <label htmlFor="filter">Wybierz filtr</label>
      <select //
        id="filter"
        defaultValue={currentOption !== "/task04" ? currentOption : "all"}
        onChange={selectFilter}
      >
        <option value="all">Brak</option>
        <option value="price-desc">Cena malejąco</option>
        <option value="price-asc">Cena rosnąco</option>
      </select>

      <Switch>
        <Route exact path="/task04">
          <Shop products={products} />
        </Route>

        <Route path="/task04/price-asc">
          <Shop products={getItemsAscending()} />
        </Route>

        <Route path="/task04/price-desc">
          <Shop products={getItemsDescending()} />
        </Route>
      </Switch>
    </>
  );
};

export default Task04;

