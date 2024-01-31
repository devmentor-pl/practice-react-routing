import React from 'react';
import { Route, Switch, Link, useParams } from 'react-router-dom';
import Product from '../src/components/Product';
import products from '../src/products.json';

const Task02 = () => {
  return (
    <>
      <h1>Task02</h1>
      <nav>
        <ul>
          <li>
            <Link to="/task02/product-1">JavaScript: DOM</Link>
          </li>
          <li>
            <Link to="/task02/product-2">JavaScript: Events</Link>
          </li>
          <li>
            <Link to="/task02/product-3">React: Components</Link>
          </li>
          <li>
            <Link to="/task02/product-4">React: Composition</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/task02/product-:id" component={ProductWithId} />
      </Switch>
    </>
  );
};

const ProductWithId = () => {
  let { id } = useParams();
  id = parseInt(id, 10);
  const product = products.find((p) => p.id === id);

  return product ? <Product {...product} /> : <p>Product not found</p>;
};

export default Task02;
