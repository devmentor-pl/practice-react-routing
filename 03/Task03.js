import React from 'react';
import Shop from "../src/components/Shop";
import products from "./../src/products.json";

const Task03 = () => {
  console.log(products);
  return (
    <>
      <h1>Task03</h1>
      <Shop products={products} />
    </>
  );
};

export default Task03;

