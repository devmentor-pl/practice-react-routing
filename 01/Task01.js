import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Home from '../src/components/Home';
import Contact from '../src/components/Contact';

const Task01 = () => {
    return (
        <Router>
            <h1>Task01</h1> 
            <Route path='/task01/home'>
                <Home />
            </Route>
            <Route path='/task01/contact'>
                <Contact />
            </Route>
        </Router>
    );
}

export default Task01;

