import React from 'react';
import {
    HashRouter as Router,
    Route
} from 'react-router-dom'

import products from './../src/products.json';
import Shop from '../src/components/Shop';

const Task03 = () => {
    return (
        <Router basename='/task03'>
            <section><h1>Task03</h1></section>
            <Route path='/:name?'>
                <Shop products={products} />
            </Route>
        </Router>
    );
}

export default Task03;

