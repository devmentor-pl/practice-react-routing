import React from 'react';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import Product from '../src/components/Product';
import products from './../src/products.json';

const Task02 = () => {
    return (
        <>
        <h1>Task02</h1>
            <Route path={'/task02/product-:id'}>
                {
                    products.map(p => <Product key={p.id} {...p}/>)          
                }
            </Route>
        </>
    );
}

export default Task02;

