import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../src/components/Home';
import Contact from '../src/components/Contact';

const Task01 = () => {
    return (
        <>
            <h1>Task01</h1>
            <Switch>
                <Route exact path="/task01/" component={ Home } />
                <Route exact path="/task01/contact" component={ Contact } />
            </Switch>
        </>
    );
}

export default Task01;

