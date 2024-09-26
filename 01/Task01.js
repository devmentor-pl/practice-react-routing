import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";

const Task01 = () => {


  return (
    <Router>
      <h1>Task01</h1>
      <Route exact path="/task01/home" component={Home}/>
      <Route path="/task01/contact" component={Contact}/>
    </Router>
  );
};

export default Task01;
