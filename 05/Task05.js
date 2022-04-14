import React, { useState } from 'react';
import Shop from '../src/components/Shop';
import NotFound from '../src/components/NotFound';
import products from '../src/products.json';
import {
  Switch,
  Route,
  Redirect,
  useParams,
  useHistory,
} from 'react-router-dom';

const Task05 = () => {
  const [inputValues, setInputValues] = useState({
    name: '',
    minPrice: '',
    maxPrice: '',
  });

  const history = useHistory();

  const findProducts = (e) => {
    e.preventDefault();
    setInputValues({
      name: e.target.name.value,
      minPrice: e.target.minPrice.value,
      maxPrice: e.target.maxPrice.value,
    });

    history.push(
      `/task05/${e.target.minPrice.value}-${e.target.maxPrice.value}-${e.target.name.value}`
    );
  };

  const { urlName, urlMinPrice, urlMaxPrice } = useParams();

  return (
    <>
      <h1>Task05</h1>

      <form onSubmit={findProducts}>
        <label>
          Nazwa produktu:
          <input type='text' name='name' placeholder='nazwa produktu'></input>
        </label>
        <label>
          Minimalna cena:
          <input type='number' name='minPrice' placeholder='cena min.'></input>
        </label>
        <label>
          Maksymalna cena cena:
          <input type='number' name='maxPrice' placeholder='cena maks.'></input>
        </label>

        <input type='submit' value='Szukaj'></input>
      </form>

      <Switch>
        <Route exact path='/task05'>
          <Shop products={products} />
        </Route>
        <Route exact path='/task05/[:urlMinPrice]-[:urlMaxPrice]-[:urlName]'>
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

export default Task05;
