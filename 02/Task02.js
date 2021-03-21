import React from 'react';
import Product from '../src/components/Product';
import { Switch } from 'react-router-dom';

import products from '../src/products.json';


const Task02 = () => {
    return (
        <>
        <h1>Task02</h1>
        { products.map(product => {
            return <Product key={product.id} {...product} />
        }) }
        </>
    );
}

export default Task02;

