import React from 'react';
import Home from "../src/components/Home";
import Contact from "../src/components/Contact";
import { Route, Link } from "react-router-dom";

const Task01 = () => {
  const nav = (
    <ul>
      <li>
        <Link to="/task01/home">Home</Link>
      </li>
      <li>
        <Link to="/task01/contact">Contact</Link>
      </li>
    </ul>
  );
  return (
    <>
      <nav>
        <h1>Task01</h1>
        {nav}
      </nav>
      <Route path="/task01/home">
        <Home />
      </Route>
      <Route path="/task01/contact">
        <Contact />
      </Route>
    </>
  );
};

export default Task01;

