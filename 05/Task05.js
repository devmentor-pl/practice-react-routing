import React, { useState } from "react";
import Shop from "../src/components/Shop";
import products from "./../src/products.json";
import { Route, useParams, useHistory } from "react-router-dom";

const SearchProducts = () => {
  const { minPrice, maxPrice, searchTerm } = useParams();

  const minPriceProducts = products.filter(
    (item) => item.price >= Number(minPrice)
  );
  const minMaxPriceProduct = minPriceProducts.filter(
    (item) => item.price <= Number(maxPrice)
  );
  const searchWord = minMaxPriceProduct.filter(
    (item) =>
      item.name.includes(searchTerm) || item.description.includes(searchTerm)
  );

  return <Shop products={searchWord} />;
};

const Task05 = () => {
  const initialStateForm = {
    minPrice: "",
    maxPrice: "",
    word: "",
  };

  const history = useHistory();
  const [form, setForm] = useState(initialStateForm);

  const handleSubmit = (e) => {
    e.preventDefault();

    history.push(`/task05/${form.minPrice}/${form.maxPrice}/${form.word}`);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  return (
    <>
      <h1>Task05</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input
              name="minPrice"
              value={form.minPrice}
              onChange={handleSearch}
            />
            Minimalna cena
          </label>
        </div>
        <div>
          <label>
            <input
              name="maxPrice"
              value={form.maxPrice}
              onChange={handleSearch}
            />
            Maksymalna cena
          </label>
        </div>
        <div>
          <label>
            <input name="word" value={form.word} onChange={handleSearch} />
            Szukane słowo
          </label>
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>

      <Route path="/task05/:minPrice/:maxPrice/:searchTerm">
        <SearchProducts />
      </Route>
    </>
  );
};

export default Task05;
