import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from './../src/components/Home'
import Contact from './../src/components/Contact'

const Task01 = () => {
    return (
        <>
            <h1>Task01</h1>
            <li><Link to='/task01/home'>Home</Link></li>
            <li><Link to='/task01/contact'>Contact</Link></li>
            <Route path='/task01/home'>
                <Home />
            </Route>
            <Route path='/task01/contact'>
                <Contact />
            </Route>
        </>

    );
}

export default Task01;

