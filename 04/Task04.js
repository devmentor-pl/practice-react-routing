import React from "react";
import { Switch, Route, useHistory, useParams } from "react-router-dom";

import products from "../src/products.json";
import Shop from "../src/components/Shop";

const ProductsSorted = () => {
  const history = useHistory();
  const { slug } = useParams();

  const sortProducts = (list, sortType) => {
    const sortedList = [...list];

    switch (sortType) {
      case "price-desc":
        return sortedList.sort((a, b) => b.price - a.price);

      case "price-asc":
        return sortedList.sort((a, b) => a.price - b.price);

      case "name-desc":
        return sortedList.sort((a, b) => b.name.localeCompare(a.name));

      case "name-asc":
        return sortedList.sort((a, b) => b.name.localeCompare(b.name));

      case "id-desc":
        return sortedList.sort((a, b) => b.id - a.id);

      case "id-asc":
        return sortedList.sort((a, b) => a.id - b.id);

      default:
        return sortedList;
    }
  };

  const handleChange = (event) => {
    const value = event.target.value;

    if (!value) {
      history.push("/task04/");
      return;
    }

    history.push(`/task04/${value}`);
  };

  const sortedProducts = sortProducts(products, slug);

  return (
    <section>
      <select value={slug || ""} onChange={handleChange}>
        <option value="">bez sortowania</option>
        <option value="price-desc">cena malejaco</option>
        <option value="price-asc">cena rosnaco</option>
        <option value="name-desc">nazwa malejaco</option>
        <option value="name-asc">nazwa rosnaco</option>
        <option value="id-desc">id malejaco</option>
        <option value="id-asc">id rosnaco</option>
      </select>

      <Shop products={sortedProducts} />
    </section>
  );
};

const Task04 = () => {
  return (
    <Switch>
      <Route exact path="/task04/:slug?" component={ProductsSorted} />
    </Switch>
  );
};

export default Task04;
