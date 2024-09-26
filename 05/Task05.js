import React from "react";
import {
  HashRouter as Router,
  Route,
  useHistory,
  useParams,
} from "react-router-dom";
import Shop from "../src/components/Shop";
import products from "./../src/products.json";
import { useState } from "react";

const ProductPage = () => {
  const { minPrice, maxPrice, name } = useParams();

  const minPriceNumber = Number(minPrice)
  const maxPriceNumber = Number(maxPrice)

  const productsWithMinPrice = Number.isNaN(minPriceNumber)
    ? products
    : products.filter((p) => p.price >= Number(minPrice));

  const productsWithMaxPrice = Number.isNaN(maxPriceNumber)
    ? productsWithMinPrice
    : productsWithMinPrice.filter((p) => p.price <= Number(maxPrice));

  const productsWithName =
    name === ""
      ? productsWithMaxPrice
      : productsWithMaxPrice.filter((p) => p.name.includes(name));

  return (
   <Shop products={productsWithName}></Shop>
  );
};

const Task05 = () => {
  const history = useHistory();

  const dataState = {
    name: "",
    priceMin: "",
    priceMax: "",
  };

  const [state, setState] = useState(dataState);

  const onChangeInputName = (e) => {
    const name = e.target.value;
    setState({
      name: name,
      priceMin: state.priceMin,
      priceMax: state.priceMax,
    });
  };

  const onChangeInputPriceMin = (e) => {
    const priceMin = e.target.value;
    setState({
      name: state.name,
      priceMin: priceMin,
      priceMax: state.priceMax,
    });
  };

  const onChangeInputPriceMax = (e) => {
    const priceMax = e.target.value;
    setState({
      name: state.name,
      priceMin: state.priceMin,
      priceMax: priceMax,
    });
  };

  const formOnSubmit = (e) => {
    e.preventDefault();
    history.push(`/task05/${state.priceMin},${state.priceMax}-${state.name}`);
    console.log(products)
  };

  return (
    <Router>
      <h1>Task05</h1>
      <form onSubmit={formOnSubmit}>
        <input onChange={onChangeInputName} placeholder="Podaj nazwę"></input>
        <input onChange={onChangeInputPriceMin} placeholder="Podaj min cenę"></input>
        <input onChange={onChangeInputPriceMax} placeholder="Podaj max cenę"></input>
        <input type="submit"></input>
      </form>

      <Route path="/task05/:minPrice?,:maxPrice?-:name?">
        <ProductPage></ProductPage>
        
        {/* <Shop products={products.filter(e=>e.name.includes(state.name))}></Shop> */}
      </Route>
    </Router>
  );
};

export default Task05;
