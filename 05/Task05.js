import React, { useState } from "react";
import { Route, useHistory, useParams } from "react-router-dom";
import products from "../src/products.json";
import Shop from "../src/components/Shop";

const Task05 = () => {
  const initState = {
    name: "",
    minPrice: "",
    maxPrice: "",
  };
  const [inputState, setInputState] = useState(initState);
  const filterRange = (arr, a, b) => {
    a = Number(a);
    b = Number(b);
    return arr.filter((item) => a <= item.price && item.price <= b);
  };
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();

    const { minPrice, maxPrice, name } = inputState;
    history.push(`/task05/${minPrice},${maxPrice}-${name}`);
  };

  const FilterPage = () => {
    const { minPrice, maxPrice, name } = useParams();
    const filteredByPrice = filterRange(products, minPrice, maxPrice);

    const filteredByAllTerms = filteredByPrice.filter(
      (p) => p.name.includes(name) || p.description.includes(name)
    );
    return <Shop list={filteredByAllTerms} />;
  };

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;

    setInputState((state) => {
      return { ...state, [name]: value };
    });
  };
  return (
    <>
      <h1>Task05</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        {" "}
        <label>
          {" "}
          Cena od
          <input
            name="minPrice"
            type="number"
            value={inputState.minPrice}
            onChange={(e) => handleChange(e)}
          ></input>
        </label>
        <label>
          {" "}
          Cena do
          <input
            name="maxPrice"
            type="number"
            value={inputState.maxPrice}
            onChange={(e) => handleChange(e)}
          ></input>
        </label>
        <label>
          {" "}
          nazwa
          <input
            name="name"
            type="text"
            value={inputState.name}
            onChange={(e) => handleChange(e)}
          ></input>
        </label>
        <input type="submit" value="szukaj" />
      </form>

      <Route exact path="/task05/:minPrice,:maxPrice-:name">
        <FilterPage />
      </Route>
    </>
  );
};

export default Task05;
