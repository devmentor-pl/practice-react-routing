import React from "react";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";

import Home from "../src/components/Home";
import Contact from "../src/components/Contact";

const Task01 = () => {
  const nav = (
    <ul>
      <li>
        <NavLink to="/task01/home">Home</NavLink>
      </li>
      <li>
        <NavLink to="/task01/contact">Contact</NavLink>
      </li>
    </ul>
  );
  return (
    <Router>
      <h1>Task01</h1>
      {nav}
      <Route path="/task01/home" component={Home} />
      <Route path="/task01/contact" component={Contact} />
    </Router>
  );
};

export default Task01;
