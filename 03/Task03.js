import React from "react";
import products from "./../src/products.json";
import { Route, useParams } from "react-router-dom";
import Shop from "../src/components/Shop";

const CategoryPage = () => {
  const { category } = useParams();
  const productCategory = products.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );

  return <Shop products={productCategory} />;
};

const Task03 = () => {
  return (
    <>
      <h1>Task03</h1>
      <Route exact path="/task03/">
        <Shop products={products} />
      </Route>
      <Route path="/task03/:category">
        <CategoryPage />
      </Route>
    </>
  );
};

export default Task03;
