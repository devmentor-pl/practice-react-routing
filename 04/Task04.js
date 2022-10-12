import React, { useEffect, useState } from "react";
import { useHistory, Route } from "react-router-dom";
import products from "../src/products.json";
import { SimpleShop } from "../src/components/Shop";

const Task04 = () => {
  const [sortOption, setSortOption] = useState("");
  const history = useHistory();
  const productsNow = products;

  useEffect(() => {
    if (sortOption) {
      history.push(`/task04/${sortOption}`);
      switch (sortOption) {
        case "price-desc":
          productsNow.sort((a, b) => b.price - a.price);
          return;
        case "price-asc":
          productsNow.sort((a, b) => a.price - b.price);
          return;
      }
    }
  }, [sortOption]);

  return (
    <>
      <h1>Task04</h1>
      <select
        name="sortBy"
        id="sortBy"
        onChange={(e) => setSortOption(e.target.value)}
        defaultValue={"default"}
      >
        <option value="default" disabled hidden>
          Choose here
        </option>
        <option value="price-desc">Cena malejąco</option>
        <option value="price-asc">Cena rosnąco</option>
      </select>
      <Route path={`/task04`}>
        <SimpleShop productList={productsNow} />
      </Route>
    </>
  );
};

export default Task04;
