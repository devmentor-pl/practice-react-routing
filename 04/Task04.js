import React, { useState, useEffect } from 'react';
import {  useHistory, useLocation } from 'react-router-dom';

import Select from '../src/components/Select';
import products from '../src/products.json';
import Shop from '../src/components/Shop';

const sortingStrategies = {
    asc: (a, b) => a.price - b.price,
    desc: (a, b) => b.price - a.price,
};

const options = [
    { id: 1, value: '', text: 'sort by' },
    {
        id: 2,
        value: 'asc',
        text: 'lowest price',
    },
    { id: 3, value: 'desc', text: 'highest price' },
    { id: 4, value: 'rel', text: 'relevance' },
];

const Task04 = () => {
    const location = useLocation();
    const history = useHistory();
    const [sortedProducts, setSortedProducts] = useState(products);

    const getSearchParams = searchString => {
        return new URLSearchParams(searchString);
    };

    useEffect(() => {
        const searchParams = getSearchParams(location.search);
        const sort = searchParams.get('sort');
        sortProducts(sort);
    }, [location]);

    const sortProducts = sortOrder => {
        if (sortingStrategies[sortOrder]) {
            const sorted = [...products].sort(sortingStrategies[sortOrder]);
            setSortedProducts(sorted);
        } else {
            setSortedProducts(products);
        }
    };

    const handleChange = e => {
        const newSortOrder = e.target.value;
        history.push(`?sort=${newSortOrder}`);
    };

    const currentSearchParams = getSearchParams(location.search);
    const currentSortOrder = currentSearchParams.get('sort') || '';

    return (
        <>
            <h1>Task04</h1>
            <Select options={options} changeHandler={handleChange} defaultValue={currentSortOrder} />
            <Shop products={sortedProducts} />
        </>
    );
};

export default Task04;
