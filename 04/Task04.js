import React, { useState, useEffect } from 'react';
import { Route, useHistory, useParams } from 'react-router-dom';

import Shop from '../src/components/Shop';

import products from '../src/products.json';

const Task04 = () => {
    const history = useHistory();
    const [userSelection, setuserSelection] = useState('');

    useEffect(() => {
        console.log('sortsort', userSelection);
    }, [userSelection]);

    const handleSelect = ({ value }) => {
        history.push(`/task04/${value}`);
        setuserSelection(value);
    };

    const sortSelector = () => {
        console.log('select run');
        return (
            <select onChange={(e) => handleSelect(e.target)}>
                <option value="">Sort method</option>
                <option value="price-desc">descending</option>
                <option value="price-asc">ascending</option>
            </select>
        );
    };

    const sortPriceDesc = () => products.sort((a, b) => a.price - b.price);
    const sortPriceAsc = () => products.sort((a, b) => b.price - a.price);

    const sortedProducts = () => {
        // maybe switch should be binded to the path rather than user selection
        switch (userSelection) {
        case 'price-desc':
            return sortPriceDesc();
        case 'price-asc':
            return sortPriceAsc();
        default:
            return products;
        }
    };

    const routes = () => (
        <Route path={`/task04/${userSelection}`}>
            <Shop products={sortedProducts()} />
        </Route>
    );

    return (
        <>
            <h1>Task04</h1>
            {sortSelector()}
            {routes()}
        </>
    );
};

export default Task04;

// SORTING
// by id, by name, by price
