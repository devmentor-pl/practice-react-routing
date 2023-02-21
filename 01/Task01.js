import React from 'react';
import Home from '../src/components/Home';
import Contact from '../src/components/Contact';
import { NavLink, Route } from 'react-router-dom';

const Task01 = () => {
    const nav = <ul>
        <li>
            <NavLink to="/task01/home">Home</NavLink>
        </li>
        <li>
            <NavLink to="/task01/contact">Contact</NavLink>
        </li>
    </ul>
    return (
        <>
            <h1>Task01</h1>
            {nav}
            <Route path="/task01/home">
                <Home></Home>
            </Route>
            <Route path="/task01/contact">
                <Contact></Contact>
            </Route>
        </>
        
    );
}

export default Task01;

