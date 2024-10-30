import React from 'react';

import { Route, NavLink } from "react-router-dom";

import Home from "./../src/components/Home";
import Contact from "./../src/components/Contact";

const Task01 = () => {
  return (
    <>
      <h1>Task 01</h1>
      <ul>
        <li>
          <NavLink
            activeStyle={{ color: "red", fontSize: "1.5rem" }}
            to="/task01/home"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            activeStyle={{ color: "red", fontSize: "1.5rem" }}
            to="/task01/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <Route path="/task01/home" component={Home} />
      <Route path="/task01/contact" component={Contact} />
    </>
  );
};

export default Task01;

