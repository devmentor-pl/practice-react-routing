import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import Shop from '../src/components/Shop';
import sortFn from '../src/helpers/sortFn';

const SortedProducts = ({ match }) => {
    const { sort } = match.params;
    return <Shop products={sortFn(sort)} />;
};

const Task04 = () => {
    const history = useHistory();
    const handleSelect = ({ value }) => history.push(`/task04/${value}`);
    const sortMethods = [
        { method: '', label: 'Sort products:' },
        { method: 'price-desc', label: 'Expensive first' },
        { method: 'price-asc', label: 'Cheapest first' },
        { method: 'alph-asc', label: 'A-Z' },
        { method: 'alph-desc', label: 'Z-A' },
    ];
    const selectOptions = sortMethods.map((o) => (
        <option value={o.method} key={o.method}>
            {o.label}
        </option>
    ));

    const sortSelector = (
        <select onChange={(e) => handleSelect(e.target)}>{selectOptions}</select>
    );

    const routes = (
        <Route exact path="/task04/:sort" component={SortedProducts} />
    );

    return (
        <>
            <h1>Task04</h1>
            {sortSelector}
            {routes}
        </>
    );
};

export default Task04;
