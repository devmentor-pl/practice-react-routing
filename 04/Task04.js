import React from "react";
import { Route, useHistory } from "react-router-dom";

import Shop from "../src/components/Shop";

import products from "./../src/products.json";

const Task04 = () => {
  const history = useHistory();

  const handleChange = e => history.push(e.target.value);

  const options = [
    {
      name: "Highest Price",
      value: "price-desc",
    },
    {
      name: "Low Price",
      value: "price-asc",
    },
    {
      name: "Product ID Descending",
      value: "id-desc",
    },
    {
      name: "Product ID Ascending",
      value: "id-asc",
    },
  ];

  const sorted = (p1, p2, sortName, order = "asc") => {
    if (p1[sortName] < p2[sortName]) {
      return order === "desc" ? 1 : -1;
    }

    if (p1[sortName] > p2[sortName]) {
      return order === "desc" ? -1 : 1;
    }

    return 0;
  };

  const sortProduct = options.map(data => {
    const sortedOptions = [...products].sort((p1, p2) => {
      switch (data.value) {
        case "price-desc":
          return sorted(p1, p2, "price", "desc");
        case "price-asc":
          return sorted(p1, p2, "price", "asc");
        case "id-desc":
          return sorted(p1, p2, "id", "desc");
        case "id-asc":
          return sorted(p1, p2, "id", "asc");
      }
    });

    return (
      
      <Route exact key={data.value} path={`/task04/${data.value}`}>
        <Shop products={sortedOptions} />
     </Route>
    );
  });

  return (
    <>
      <h1>Task04</h1>
      <label>Sort products by: </label>
      <select onChange={handleChange}>
        <option>Select</option>
        {options.map(data => (
          <option key={data.value} value={`/task04/${data.value}`}>
            {data.name}
          </option>
        ))}
      </select>
      {sortProduct}
    </>
  );
};

export default Task04;