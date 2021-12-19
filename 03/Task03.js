import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import products from './../src/products.json';
import Shop from '../src/components/Shop';
import NotFound from './../src/components/NotFound';

const Task03 = () => {
    return (
        <>
            <h1>Task03</h1>
            <Switch>
                <Route exact path="/task03/">
                    <Shop products={ products } />
                </Route>
                <Route path="/task03/:category">
                    <Shop products={ products } />
                </Route>
                <Route path="/404.html">
                    <NotFound />
                </Route>
                <Route>
                    <Redirect to="/404.html" />
                </Route>
            </Switch>
        </>
    );
}

export default Task03;

