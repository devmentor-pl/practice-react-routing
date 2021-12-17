import React from 'react';
import { HashRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

import Contact from '../src/components/Contact';
import Home from '../src/components/Home';

const Nav = () => {
    const activeStyle = { border: '1px solid red' }
    return (
        <ul>
            <li>
                <NavLink 
                to='/task01/home'
                activeStyle={activeStyle}
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/task01/contact'
                activeStyle={activeStyle}
                >
                    Contact
                </NavLink>
            </li>
        </ul>
    )
}

const Task01 = () => {
    return (
        <Router>
          <h1>Task01</h1>
          <Nav/> 
          <Switch>
              <Route path='/task01/home'>
                  <Home/>
              </Route>
              <Route path='/task01/contact'>
                  <Contact/>
              </Route>
          </Switch>
        </Router>
        
    );
}

export default Task01;

