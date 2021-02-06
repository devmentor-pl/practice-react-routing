import React, { useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import Shop from "../src/components/Shop";

import products from "./../src/products.json";

const FilteredShop = props => {
  const { priceFrom = 0, priceTo = 1000, search = "" } = props.match.params;

  const filteredProducts = products.filter(p => {
    let rightProduct = p.price >= +priceFrom && p.price <= +priceTo;
    console.log(rightProduct);
    if (rightProduct && search.trim().length > 0) {
      const lowerCasedSearch = search.toLowerCase();

      rightProduct =
        p.name.toLowerCase().includes(lowerCasedSearch) ||
        p.description.toLowerCase().includes(lowerCasedSearch);
    }

    if (rightProduct) {
      return p;
    }
  });

  return <Shop products={filteredProducts} />;
};

const Task05 = () => {
  const initState = {
    search: "",
    priceFrom: 0,
    priceTo: 1000,
  };

  const [state, setState] = useState(initState);
  const history = useHistory();

  const handleInputChange = e => {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSearch = e => {
    e.preventDefault();

    history.push(`/task05/${state.priceFrom}/${state.priceTo}/${state.search}`);
  };

  return (
    <>
      <h1>Task05</h1>
      <form onSubmit={handleSearch}>
        <label>
          Search:{" "}
          <input
            type="text"
            name="search"
            value={state.search}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Price from:{" "}
          <input
            type="number"
            name="priceFrom"
            value={state.priceFrom}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Price to:{" "}
          <input
            type="number"
            name="priceTo"
            value={state.priceTo}
            onChange={handleInputChange}
          />
        </label>
        <button>Search</button>
      </form>

      <Switch>
        <Route
          path="/task05/:priceFrom/:priceTo/:search"
          render={props => {
            return <FilteredShop {...props} />;
          }}
        ></Route>
        <Route
          path="/task05/:priceFrom/:priceTo"
          render={props => {
            return <FilteredShop {...props} />;
          }}
        ></Route>
        <Route>
          <Shop products={products} />
        </Route>
      </Switch>
    </>
  );
};

export default Task05;
