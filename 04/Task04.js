import React from 'react';
import { useHistory } from "react-router-dom";
import Shop from "../src/components/Shop";
import { Route } from "react-router-dom";

const Task04 = () => {
  const history = useHistory();
  const handleChange = (event) => {
    history.push(event.target.value);
  };

  return (
    <>
      <h1>Task04</h1>
      <select onChange={handleChange}>
        <option value="/task04/price-desc">Cena malejąco</option>
        <option value="/task04/price-asc">Cena rosnąco</option>
        <option value="/task04/name-alph">Sortuj alfabetycznie</option>
      </select>
      <Route path="/task04/:sorting">
        <Shop />
      </Route>
      <Route exact path="/task04" component={() => <Shop main />} />
    </>
  );
};

export default Task04;

