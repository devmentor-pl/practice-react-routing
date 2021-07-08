import React from "react";
import { Route, Router, Switch, useHistory } from "react-router-dom";

import Shop from "../src/components/Shop";

import products from "./../src/products.json";

const Task04 = () => {
  const history = useHistory();

  const handleChange = e => history.push(e.target.value);

  const sortData = [
    {
      text: "Price Descending",
      value: "price-desc",
    },
    {
      text: "Price Ascending",
      value: "price-asc",
    },
    {
      text: "Product Name Descending",
      value: "name-desc",
    },
    {
      text: "Product Name Ascending",
      value: "name-asc",
    },
    {
      text: "Product Id Descending",
      value: "id-desc",
    },
    {
      text: "Product Id Ascending",
      value: "id-asc",
    },
  ];

  const compare = (p1, p2, propertyName, order = "asc") => {
    if (p1[propertyName] < p2[propertyName]) {
      return order === "desc" ? 1 : -1;
    }

    if (p1[propertyName] > p2[propertyName]) {
      return order === "desc" ? -1 : 1;
    }

    return 0;
  };

  const routes = sortData.map(data => {
    const sortedProducts = [...products].sort((p1, p2) => {
      switch (data.value) {
        case "price-desc":
          return compare(p1, p2, "price", "desc");
        case "price-asc":
          return compare(p1, p2, "price", "asc");
        case "name-desc":
          return compare(p1, p2, "name", "desc");
        case "name-asc":
          return compare(p1, p2, "name", "asc");
        case "id-desc":
          return compare(p1, p2, "id", "desc");
        case "id-asc":
          return compare(p1, p2, "id", "asc");
      }
    });

    return (
      <Route exact key={data.value} path={`/task04/${data.value}`}>
        <Shop products={sortedProducts} />
      </Route>
    );
  });

  return (
    <>
      <h1>Task04</h1>
      <label>Sort products by: </label>
      <select onChange={handleChange}>
        <option>Select</option>
        {sortData.map(data => (
          <option key={data.value} value={`/task04/${data.value}`}>
            {data.text}
          </option>
        ))}
      </select>

      {routes}
    </>
  );
};

export default Task04;
