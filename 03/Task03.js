import React from 'react';
import Shop from "../src/components/Shop";
import products from "./../src/products.json";
import { Route } from "react-router-dom";

const Task03 = () => {
  console.log(products);

return (
    <>
    <h1>Task03</h1>
    <Route path = "/task03/:category">
    component={() => {
        return <Shop/>
    }}
  </Route>
  </>
)

  
};

export default Task03;

/*     <>
      <h1>Task03</h1>
      <Shop products={products} />
    </> */

