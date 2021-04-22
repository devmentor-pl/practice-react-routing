import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import Home from '../src/components/Home';
import Contact from '../src/components/Contact';

const Task01 = () => {
    const { path } = useRouteMatch();
    return (
        <>
            <h1>Task01</h1>
            <ul>
                <li>
                    <Link to={`${path}/home`}>Home</Link>
                </li>
                <li>
                    <Link to={`${path}/contact`}>Contact</Link>
                </li>
            </ul>
            <Switch>
                <Route path={`${path}/home`} component={Home} />
                <Route path={`${path}/contact`} component={Contact} />
            </Switch>
        </>
    );
}

export default Task01;

