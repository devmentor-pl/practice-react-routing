import React, { useEffect, useReducer } from "react";
import { useHistory, Route, useLocation } from "react-router-dom";
import products from "../src/products.json";
import { SimpleShop } from "../src/components/Shop";

const SearchPage = () => {
  const location = useLocation();
  return <SimpleShop productList={location.state} />;
};

const Task05 = () => {
  const history = useHistory();

  const initialState = {
    min: 0,
    max: 0,
    productNamePhrase: "",
    productsNow: [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "changeField":
        return { ...state, [action.key]: action.value };
      case "filterProducts":
        return { ...state, productsNow: action.filteredProducts };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleFilter = (e) => {
    e.preventDefault();
    const { min, max, productNamePhrase } = state;
    let filteredProducts = products;

    if (min)
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= min
      );
    if (max)
      filteredProducts = filteredProducts.filter(
        (product) => product.price <= max
      );
    if (productNamePhrase)
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(productNamePhrase.toLowerCase())
      );

    dispatch({ type: "filterProducts", filteredProducts: filteredProducts });
  };

  useEffect(() => {
    const { min, max, productNamePhrase } = state;
    if (state.productsNow.length !== 0)
      history.push({
        pathname: `/task05/${min}/${max}/${productNamePhrase}`,
        state: state.productsNow,
      });
  }, [state.productsNow]);

  return (
    <>
      <h1>Task05</h1>
      <form action="" onSubmit={(e) => handleFilter(e)}>
        <input
          type="number"
          name="min"
          value={state.min}
          onChange={(e) =>
            dispatch({
              type: "changeField",
              key: e.target.name,
              value: Number(e.target.value),
            })
          }
        />
        <input
          type="number"
          name="max"
          value={state.max}
          onChange={(e) =>
            dispatch({
              type: "changeField",
              key: e.target.name,
              value: Number(e.target.value),
            })
          }
        />
        <input
          type="text"
          name="productNamePhrase"
          value={state.productNamePhrase}
          onChange={(e) =>
            dispatch({
              type: "changeField",
              key: e.target.name,
              value: e.target.value,
            })
          }
        />
        <input type="submit" />
      </form>
      <Route exact path={`/task05`}>
        <SimpleShop productList={products} />
      </Route>
      <Route
        path={`/task05/${state.min}/${state.max}/${state.productNamePhrase}`}
      >
        <SearchPage />
      </Route>
    </>
  );
};

export default Task05;
