import React from 'react';

import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from '../src/components/Home';
import Contact from '../src/components/Contact';

const Task01 = () => {
    const routes = [
        {url: '/task01/home', text: 'Home'},
        {url: '/task01/contact', text: 'Contact'}
    ]
    return (
        <Router>
        <div>
        <h1>Task01</h1>
        <nav>
            <ul>
                { routes.map(item => <li key={item.url}><Link to={item.url}>{item.text}</Link></li>)}
            </ul>
        </nav>
        <Switch>
            <Route path='/task01/home' component={ Home }/>
            <Route path='/task01/contact' component={ Contact }/>
        </Switch>
        </div>
        </Router>
    );
}

export default Task01;

