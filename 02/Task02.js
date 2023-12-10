import React from 'react';
import products from '../src/products.json'
import { Route, Link, useParams } from 'react-router-dom'
import Product from '../src/components/Product';
const Task02 = () => {
    
    return (
        <>
      <h1>Task02</h1>
      <Route path='/task02/:alias-:id'>
        <Product />
      </Route>
    </>
);
}

export default Task02;

