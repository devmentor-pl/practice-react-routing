import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import Shop from '../src/components/Shop';
import sortFn from '../src/helpers/sortFn';

const SortedProducts = ({ match }) => {
    const { sortMethod } = match.params;
    return <Shop products={sortFn(sortMethod)} />;
};

const Task04 = () => {
    const history = useHistory();
    const handleSelect = ({ value }) => history.push(`/task04/${value}`);

    const sortSelector = () => (
        <select onChange={(e) => handleSelect(e.target)}>
            <option value="">Sort method</option>
            <option value="price-desc">Expensive first</option>
            <option value="price-asc">Cheapest first</option>
            <option value="alph-asc">A-Z</option>
            <option value="alph-desc">Z-A</option>
        </select>
    );

    const routes = () => (
        <Route exact path="/task04/:sortMethod" component={SortedProducts} />
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
