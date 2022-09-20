import React from 'react';
import { Link, Route, Switch } from 'react-router-dom'
import Home from '../src/components/Home';
import Contact from '../src/components/Contact';

const Task01 = () => {
    return (
        <div>
            <h1>Task01</h1>
            <ul>
                <li>
                    <Link to="/task01/home">Home</Link>
                </li>
                <li>
                    <Link to="/task01/contact">Contact</Link>
                </li>
            </ul>
            <hr />
            <Switch>
                <Route path='/task01/home'>
                    <Home />
                </Route>
                <Route path='/task01/contact'>
                    <Contact />
                </Route>
            </Switch>
        </div>
    );
}

export default Task01;

