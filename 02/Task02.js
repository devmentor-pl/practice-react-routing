import React from 'react';
import { Route } from 'react-router-dom';

import Product from '../src/components/Product';

const Task02 = () => {
    return (
        <>
            <h1>Task02</h1>
            <Route path='/task02/product-:id'>
                <Product />
            </Route>
        </>
    );
};

export default Task02;
