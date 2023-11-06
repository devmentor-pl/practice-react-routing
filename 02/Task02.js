import React from 'react';
import { Route } from 'react-router-dom';
import Product02 from '../src/components/Product02'


const Task02 = () => {
    return (
        <>
            <h1>Task02</h1>
            <Route path='/task02/product-:id'>
                <Product02 />
            </Route>
        </>
    );
}

export default Task02;

