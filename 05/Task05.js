import React from 'react';
import Shop from '../src/components/Shop';
import products from './../src/products.json';

const Task05 = () => {
    return (
        <div>
            <h1>Task05</h1>
            <Shop products={products}/>
        </div>
    );
}

export default Task05;

