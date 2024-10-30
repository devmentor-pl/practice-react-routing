import React from "react";

import products from "./../src/products.json";

import Shop from "../src/components/Shop";
import CategoryPage from "../src/components/CategoryPage";
import { NavLink, Route } from "react-router-dom/cjs/react-router-dom.min";

const Task03 = () => {
  return (
    <>
      <h1>Task03</h1>

      <ul>
        <li>
          <NavLink to="/task03/">All products</NavLink>
        </li>
        <li>
          <NavLink to="/task03/javascript">Category: JavaScript</NavLink>
        </li>
        <li>
          <NavLink to="/task03/react">Category: React</NavLink>
        </li>
        <li>
          <NavLink to="/task03/wrongcategory">Wrong Category</NavLink>
        </li>
      </ul>

      <Route exact path="/task03/">
        <Shop list={products} />
      </Route>

      <Route path="/task03/:category">
        <CategoryPage />
      </Route>
    </>
  );
};

export default Task03;
