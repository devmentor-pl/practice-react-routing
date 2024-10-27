import React from 'react';
import { Route, useParams } from "react-router-dom";
import Shop from "../src/components/Shop";
import products from "./../src/products.json";

const Task03 = () => {
  const CategoryItem = () => {
    const { category } = useParams();
    console.log(category);
    return (
      <Shop
        list={products.filter(
          (item) => category.toLowerCase() === item.category.toLowerCase()
        )}
      />
    );
  };

  return (
    <>
      <h1>Task03</h1>

      <Route exact path="/task03">
        <Shop list={products}></Shop>
      </Route>
      <Route path="/task03/:category">
        <CategoryItem />
      </Route>
    </>
  );
};

export default Task03;

