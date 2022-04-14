import React from 'react';

import Shop from '../src/components/Shop';
import products from './../src/products.json';
import NotFound from '../src/components/NotFound';
import { Switch, Route, Redirect } from 'react-router-dom';

const Task03 = () => {
  return (
    <>
      <h1>Task03</h1>
      <Switch>
        <Route exact path='/task03/'>
          <Shop products={products} />
        </Route>
        <Route path='/task03/javascript'>
          <Shop
            products={products.filter((item) => item.category === 'JavaScript')}
          />
        </Route>
        <Route path='/task03/react'>
          <Shop
            products={products.filter((item) => item.category === 'React')}
          />
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

export default Task03;
