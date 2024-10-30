import React, { useState } from "react";

import { Route, useParams, useHistory } from "react-router-dom";
import Shop from "../src/components/Shop";
import products from "../src/products.json";

const SearchPage = () => {
  const { minPrice, maxPrice, searchTerm = "" } = useParams();

  const filterByMinPrice = (price, products) => {
    return Number.isNaN(price)
      ? products
      : products.filter((p) => p.price >= price);
  };

  const filterByMaxPrice = (price, products) => {
    return Number.isNaN(price)
      ? products
      : products.filter((p) => p.price <= price);
  };

  const filterBySearchTerm = (term, products) => {
    const termLowerCase = term.toLowerCase();
    return term.length === ""
      ? products
      : products.filter(
          (p) =>
            p.name.toLowerCase().includes(termLowerCase) ||
            p.description.includes(termLowerCase)
        );
  };

  const productsAfterMinPrice = filterByMinPrice(Number(minPrice), products);
  const productsAfterMaxPrice = filterByMaxPrice(
    Number(maxPrice),
    productsAfterMinPrice
  );
  const productsAfterSearchTerm = filterBySearchTerm(
    searchTerm,
    productsAfterMaxPrice
  );

  return <Shop list={productsAfterSearchTerm} />;
};

const Task05 = () => {
  const initialSearch = {
    text: "",
    priceMin: "",
    priceMax: "",
  };

  const [form, setForm] = useState(initialSearch);
  const history = useHistory();

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    const { priceMin, priceMax, text } = form;
    e.preventDefault();
    history.push(`/task05/${priceMin},${priceMax}-${text}`);
  };

  return (
    <>
      <h1>Task05</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Fraza</label>
          <input name={"text"} value={form.text} onChange={handleChange} />
        </div>
        <div>
          <label>Cena minimalna</label>
          <input
            name={"priceMin"}
            value={form.priceMin}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Cena maksymalna</label>
          <input
            name={"priceMax"}
            value={form.priceMax}
            onChange={handleChange}
          />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>

      <Route path="/task05/:minPrice?,:maxPrice?-:searchTerm?">
        <SearchPage />
      </Route>
    </>
  );
};

export default Task05;
