import React, { useState } from "react";
import { Route } from "react-router-dom";
import Shop from "../src/components/Shop";
import { useHistory } from "react-router-dom";

const Task05 = () => {
  const history = useHistory();
  const [form, setForm] = useState({
    minPrice: 0,
    maxPrice: 0,
    searchTerm: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(form.minPrice, form.maxPrice);
    const minimalPrice = form.minPrice;
    const maximalPrice = form.maxPrice;
    const searchedTerm = form.searchTerm;
    let priceRange = "/task05/" + `${minimalPrice}` + "-" + `${maximalPrice}`;
    if (searchedTerm.length > 0) {
      priceRange = priceRange + "-" + `${searchedTerm}`;
    }
    history.push(priceRange);
  };
  const inputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  return (
    <>
      <h1>Task05</h1>
      <form onSubmit={submitHandler}>
        <label>
          podaj cenę min.:
          <input name="minPrice" value={form.minPrice} onChange={inputChange} />
        </label>
        <label>
          podaj cenę max.:
          <input name="maxPrice" value={form.maxPrice} onChange={inputChange} />
        </label>
        <label>
          podaj szukany tekst:
          <input
            name="searchTerm"
            value={form.searchTerm}
            onChange={inputChange}
          />
        </label>
        <input type="submit" />
      </form>
      <Route path="/task05/:min-:max-:term">
        <Shop />
      </Route>
      <Route path="/task05/:min-:max">
        <Shop />
      </Route>
      <Route exact path="/task05/">
        <Shop />
      </Route>
    </>
  );
};

export default Task05;
