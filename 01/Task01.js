import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../src/components/Home';
import Contact from '../src/components/Contact';
import { Link } from 'react-router-dom';

const Task01 = () => {
    return (
      <Router>
        <div>
          <h1>Task 01</h1>
          <nav>
            <Link to="/task01/home">Home</Link> | 
            <Link to="/task01/contact">Contact</Link>
          </nav>
          <Switch>
            <Route path="/task01/home" component={Home} />
            <Route path="/task01/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    );
}

export default Task01;

