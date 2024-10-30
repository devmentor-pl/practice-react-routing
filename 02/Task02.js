import React from "react";

import { Route, NavLink } from "react-router-dom";

import ProductPage from "../src/components/ProductPage";

const Task02 = () => {
  return (
    <>
      <h1>Task02</h1>

      <ul>
        <li>
          <NavLink
            activeStyle={{ color: "red", fontSize: "1.5rem" }}
            to="/task02/product-1"
          >
            ID 1
          </NavLink>
        </li>
        <li>
          <NavLink
            activeStyle={{ color: "red", fontSize: "1.5rem" }}
            to="/task02/product-2"
          >
            ID 2
          </NavLink>
        </li>
        <li>
          <NavLink
            activeStyle={{ color: "red", fontSize: "1.5rem" }}
            to="/task02/product-3"
          >
            ID 3
          </NavLink>
        </li>
        <li>
          <NavLink
            activeStyle={{ color: "red", fontSize: "1.5rem" }}
            to="/task02/product-4"
          >
            ID 4
          </NavLink>
        </li>
        <li>
          <NavLink
            activeStyle={{ color: "red", fontSize: "1.5rem" }}
            to="/task02/product-100"
          >
            Wrong ID
          </NavLink>
        </li>
      </ul>
      <Route path="/task02/product-:id">
        <ProductPage />
      </Route>
    </>
  );
};

export default Task02;
