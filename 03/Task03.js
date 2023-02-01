import React from 'react';
import Shop from "../src/components/Shop";
import products from "./../src/products.json";
import { Route } from "react-router-dom";

const Task03 = () => {
  console.log(products);

return (
  <>
    <h1>Task03</h1>
    <Route path="/task03/:category">
      <Shop />
    </Route>
    <Route exact path='/task03'
 component={
 () => <Shop main/>
 }
 />
  </>
);

  
};

export default Task03;
