import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  useHistory,
  useParams,
} from "react-router-dom";
import products from "./../src/products.json";
import Shop from "../src/components/Shop";

const Task04 = () => {
    const history = useHistory()

    const handleChange = (e) => {
    history.push(e.target.value)
  };

  return (
    <>
     <Router>
      <h1>Task04</h1>
      <select onChange={handleChange}>
        <option value="/task04">Wybierz</option>
        <option value="/task04/price-desc">Ceny malejąco</option>
        <option value="/task04/price-asc">Ceny rosnąco</option>
      </select>
        <Switch>
        <Route path="/task04/:sort">
                    <SortShopWithPrices />
                </Route>
        </Switch>
      </Router>
    </>
  );
};


const SortShopWithPrices = () => {
  const { sort } = useParams();
    const sortedProducts = [...products];

    if (sort === 'price-desc') {
        sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sort === 'price-asc') {
        sortedProducts.sort((a, b) => a.price - b.price);
    }

    return <Shop products={sortedProducts} />;
}

export default Task04;


