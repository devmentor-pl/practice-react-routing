import React from 'react';
import Select from '../src/components/Select';
import { Route } from 'react-router-dom';
import products from '../src/products.json'
import Shop from '../src/components/Shop'

const Task04 = () => {

    return (
        <>
            <h1>Task04</h1>
            <Select />
            <Route path='/task04/price-desc'>
                <Shop products={[...products].sort((a, b) => b.price - a.price)} />
            </Route>
            <Route path='/task04/price-asc'>
                <Shop products={[...products].sort((a, b) => a.price - b.price)} />
            </Route>
        </>
    );
}

export default Task04;

