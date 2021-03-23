import React, { useState } from 'react';
import { Route, useHistory, useRouteMatch } from 'react-router-dom';

import Shop from '../src/components/Shop';

import products from '../src/products.json';

const Task04 = () => {
    const [sortMethod, setSortMethod] = useState('');
    const { path } = useRouteMatch();
    const history = useHistory();
    console.log('🚀 ~ Task04 ~ history', history)

    const handleChange = ({ value }) => setSortMethod(value);

    const sortProducts = () => {
        if (sortMethod === 'price-asc') {
            return products.sort((a, b) => a.price - b.price);
        } if (sortMethod === 'price-desc') {
            return products.sort((a, b) => b.price - a.price);
        }
        return products;
    };

    const routes = (
        <Route exact to={`${path}/${sortMethod}`}>
            <Shop products={sortProducts()} />
        </Route>
    );

    const sortSelector = (
        <select onChange={(e) => handleChange(e.target)}>
            <option value="/">Sort method</option>
            <option value="price-desc">descending</option>
            <option value="price-asc">ascending</option>
        </select>
    );

    return (
        <>
            <h1>Task04</h1>
            {/* {nav} */}
            {sortSelector}
            {routes}
        </>
    );
};

export default Task04;
