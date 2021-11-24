import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../src/components/Home";
import Contact from "../src/components/Contact";

const Task01 = () => {
    return (
        <>
            <h1>Task01</h1>
            <Router>
                <Route exact path="/task01/home" component={Home} />
                <Route exact path="/task01/contact" component={Contact} />
            </Router>
        </>
    );
};

export default Task01;
