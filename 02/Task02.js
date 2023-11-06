import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom/cjs/react-router-dom';
import Product from '../src/components/Product'


const Task02 = () => {
    return (
        <Router>
            <h1>Task02</h1>
            <Route path='/task02/product-:id'>
                <Product />
            </Route>
        </Router>
    );
}

export default Task02;

