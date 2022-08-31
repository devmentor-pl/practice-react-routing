import React from 'react';
import { Switch, Route, Redirect, useHistory } from "react-router-dom";

import products from "./../src/products.json";

import Shop from "../src/components/Shop";
import NotFound from "../src/components/NotFound";

const Task03 = () => {
  const history = useHistory();

  const currentCategory = history.location.pathname.replace("/task03/", "");

  const getItemsFromCategory = (category) => {
    return products.filter((product) => product.category === category);
  };

  const selectCategory = (e) => {
    const selectedCategory = e.target.value;

    history.push(`/task03/${selectedCategory}`);

    if (selectedCategory === "all") history.push("/task03");
  };

  return (
    <>
      <h1>Task03</h1>

      <label htmlFor="category">Wybierz kategorię</label>
      <select //
        id="category"
        defaultValue={currentCategory !== "/task03" ? currentCategory : "all"}
        onChange={selectCategory}
      >
        <option value="all">Pokaż wszystko</option>
        <option value="javascript">JavaScript</option>
        <option value="react">React</option>
      </select>

      <Switch>
        <Route exact path="/task03">
          <Shop products={products} />
        </Route>

        <Route path="/task03/javascript">
          <Shop products={getItemsFromCategory("JavaScript")} />
        </Route>

        <Route path="/task03/react">
          <Shop products={getItemsFromCategory("React")} />
        </Route>

        <Route path="/404.html">
          <NotFound />
        </Route>

        <Route>
          <Redirect to="/404.html" />
        </Route>
      </Switch>
    </>
  );
};

export default Task03;

