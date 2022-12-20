import React from 'react';
import { Route } from 'react-router-dom';

import ProductId from './ProductId';

const Task02 = () => {
    return (
        <>
            <h1>Task02</h1>
            <Route path='/task02/product-:id'>
                <ProductId/>
            </Route>
        </>
    );
}

export default Task02;

