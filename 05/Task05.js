import React, { useEffect, useReducer } from "react";
import { useHistory, Switch, Route } from "react-router-dom";

import Shop from "../src/components/Shop";
import ShopFiltered from "../src/components/ShopFiltered";
import products from "../src/products.json";

const Task05 = () => {
  const history = useHistory();
  const initialValues = {
    minPrice: "",
    maxPrice: "",
    searchTerm: "",
  };
  const changeHandler = (inputValues, { name, value }) => ({
    ...inputValues,
    [name]: value,
  });
  const [inputValues, dispatchInputValues] = useReducer(
    changeHandler,
    initialValues
  );

  useEffect(() => {
    const { minPrice, maxPrice, searchTerm } = inputValues;

    if (minPrice !== "" || maxPrice !== "" || searchTerm !== "") {
      history.push(`/task05/${minPrice},${maxPrice}-${searchTerm}`);
    } else {
      history.replace("/task05");
    }
  }, [inputValues, history]);

  const { minPrice, maxPrice, searchTerm } = inputValues;
  return (
    <>
      <h1>Task05</h1>
      <form>
        <input
          type="text"
          name="minPrice"
          placeholder="Cena od"
          value={minPrice}
          onChange={(e) => dispatchInputValues(e.target)}
        />
        <input
          type="text"
          name="maxPrice"
          placeholder="Cena do"
          value={maxPrice}
          onChange={(e) => dispatchInputValues(e.target)}
        />
        <input
          type="text"
          name="searchTerm"
          placeholder="Nazwa produktu"
          value={searchTerm}
          onChange={(e) => dispatchInputValues(e.target)}
        />
      </form>
      <Switch>
        <Route
          exact
          path="/task05"
          component={() => <Shop products={products} />}
        />
        <Route
          path="/task05/:minPrice?,:maxPrice?-:searchTerm?"
          component={() => <ShopFiltered products={products} />}
        />
      </Switch>
    </>
  );
};

export default Task05;
