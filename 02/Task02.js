import React from 'react';
import { Route, Link, useParams } from "react-router-dom";
import Product from "../src/components/Product";

import products from "../src/products.json";

const Task02 = () => {
  const ProductPage = () => {
    const { id } = useParams();
    const productItem = products.filter((item) => Number(id) === item.id);
    return <Product {...productItem[0]} />;
  };
  return (
    <>
      <h1>Task02</h1>

      <Route path="/task02/product-:id">
        <ProductPage />
      </Route>
    </>
  );
};

export default Task02;

