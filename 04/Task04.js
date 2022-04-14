import React from 'react';
import Shop from '../src/components/Shop';
import NotFound from '../src/components/NotFound';
import products from '../src/products.json';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';

const Task04 = () => {
  const history = useHistory();

  const handleChange = (e) => {
    history.push(e.target.value);

    if (e.target.value === '/task04/price-desc') {
      products.sort((a, b) => b.price - a.price);
    } else if (e.target.value === '/task04/price-asc') {
      products.sort((a, b) => a.price - b.price);
    } else if (e.target.value === '/task04') {
      products.sort((a, b) => a.id - b.id);
    }
  };

  return (
    <>
      <h1>Task04</h1>
      <select onChange={handleChange}>
        <option value='/task04'>Sortuj produkty</option>
        <option value='/task04/price-desc'>cena malejąco</option>
        <option value='/task04/price-asc'>cena rosnąco</option>
      </select>
      <Switch>
        <Route exact path='/task04/'>
          <Shop products={products} />
        </Route>
        <Route path='/task04/price-desc'>
          <Shop products={products} />
        </Route>
        <Route path='/task04/price-asc'>
          <Shop products={products} />
        </Route>
        <Route path='/404.html'>
          <NotFound />
        </Route>
        <Route>
          <Redirect to='/404.html' />
        </Route>
      </Switch>
    </>
  );
};

export default Task04;
