import React from 'react';
import { Route } from 'react-router-dom';
import Products from '../src/views/Products';

const Task02 = () => {
  return (
    <>
      <h1>Task02</h1>
      <Route path='/task02/:alias-:id'>
        <Products />
      </Route>
    </>
  );
};

export default Task02;
