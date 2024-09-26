import React from 'react';
import Home from '../src/components/Home'; 
import Contact from '../src/components/Contact';
import { Route, Switch, useLocation } from 'react-router-dom/cjs/react-router-dom.min';

const Task01 = () => {

    const location = useLocation()
    const baseUrl = location.pathname.replace(/\/[^/]+$/, '')

    return (
        <>
        <h1>Task01</h1>
        <Switch>
            <Route path={`${baseUrl}/home`} component={Home}/>
            <Route path={`${baseUrl}/contact`} component={Contact}/>
        </Switch>
        </>

    );
}

export default Task01;

