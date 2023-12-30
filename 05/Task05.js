import React from 'react';
import { useHistory, Route } from 'react-router-dom';

import products from '../src/products.json';
import Form from '../src/components/Form';
import FilteredPage from '../src/components/FilteredPage';
import Shop from '../src/components/Shop';

const Task05 = () => {
    const history = useHistory();

    const handleChagne = dataObj => {
        const { min, max, query } = dataObj;
        const searchQuery = query.length === 0 ? 'all' : query;
        let queryString = '';

        if (min || max) {
            const queryParams = new URLSearchParams();

            if (min) queryParams.append('range.price.min', min);
            if (max) queryParams.append('range.price.max', max);

            queryString = `?${queryParams.toString()}`;
        }

        const path = `/task05/q-${searchQuery}${queryString}`;

        if ((history.location.pathname === path, min === '', max === '')) return;

        history.push(path);
    };

    return (
        <>
            <h1>Task05</h1>
            <Form submitHandler={handleChagne} />
            <hr />
            <Route path={`/task05/q-:query?`}>
                <FilteredPage />
            </Route>
            <Route exact path={`/task05`}>
                <Shop products={products} />
            </Route>
        </>
    );
};

export default Task05;
