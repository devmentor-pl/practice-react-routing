import React from 'react';
import {
    HashRouter as Router,
    Route
} from 'react-router-dom'

import Product from '../src/components/Product'

const Task02 = () => {
    return (
        <Router basename='/task02'>
            <section><h1>Task02</h1></section>
            <Route path='/product-:id'>
                <Product />
            </Route>
        </Router>

    );
}

export default Task02;

