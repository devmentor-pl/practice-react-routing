import React from 'react';
import { Route } from 'react-router-dom';
import Product from '../src/components/Product';
import { Link } from 'react-router-dom';

const Task02 = () => {
  return (
    <>
      <h1>Task02</h1>
      <ul>
        <li>
          <Link to="/task02/product-1">Link to product 1</Link>
        </li>
        <li>
          <Link to="/task02/product-2">Link to product 2</Link>
        </li>
        <li>
          <Link to="/task02/product-3">Link to product 3</Link>
        </li>
        <li>
          <Link to="/task02/product-4">Not found</Link>
        </li>
      </ul>
      <Route path="/task02/product-:productId" component={Product} />
    </>
  );
};

export default Task02;
