import React from "react";
import { Route, NavLink } from "react-router-dom";
import products from "./../src/products.json";
import Shop from "../src/components/Shop";

const Task03 = () => {
  return (
    <>
      <h1>Task03</h1>
      <ul>
        <li>
          <NavLink
            activeStyle={{ borderRight: "5px solid green" }}
            to={"/task03/javascript"}
          >
            javascript
          </NavLink>
        </li>
        <li>
          <NavLink
            activeStyle={{ borderRight: "5px solid green" }}
            to={"/task03/react"}
          >
            react
          </NavLink>
        </li>
      </ul>
      <Route path="/task03/:category">
        <Shop products={products} />
      </Route>
    </>
  );
};

export default Task03;
