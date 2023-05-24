import React from 'react';

import products from './../src/products.json';
import Shop from "../src/components/Shop";

const Task03 = () => {
  return (
    <>
      <h1>Task03</h1>
      <Shop products={products} />
    </>
  );
};

export default Task03;

