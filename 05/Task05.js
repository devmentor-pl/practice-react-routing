import React, { useState } from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  useParams,
  useHistory,
} from "react-router-dom";
import products from "./../src/products.json";
import Shop from "../src/components/Shop";

const Task05 = () => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [term, setTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const filtered = products.filter((product) => {
      const priceInRange =
        (!minPrice || parseFloat(product.price) >= parseFloat(minPrice)) &&
        (!maxPrice || parseFloat(product.price) <= parseFloat(maxPrice));
      const searchTermMatch =
        !term || product.name.toLowerCase().includes(term.toLowerCase());
      return priceInRange && searchTermMatch;
    });
    setFilteredProducts(filtered);
    const path = `/task05/${minPrice},${maxPrice}-${term}`;
    history.push(path);
  };
  return (
    <>
      <Router>
        <h1>Task05</h1>
        <form onSubmit={handleSubmit}>
          <input
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="minPrice"
            type="number"
          />
          <input
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="maxPrice"
            type="number"
          />
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="searchTerm"
            type="text"
          />
          <button type="submit">Check</button>
        </form>
        <Switch>
          <Route path="/task05/:minMaxPrice-:searchTerm">
            <Shop products={filteredProducts} />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Task05;
