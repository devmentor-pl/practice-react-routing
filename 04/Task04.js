import React from 'react';
import products from './../src/products.json';
import { Switch, Route, useHistory } from 'react-router-dom';

import Shop from '../src/components/Shop';

const Task04 = () => {
    const history = useHistory();
    const handleChange = e => {
        e.preventDefault();
        history.push(`/task04/price-${e.target.value}`);
    }

    return (
        <>
            <h1>Task04</h1>
            <select onChange={ handleChange }>
                <option value="">Sortowanie</option>
                <option value="asc">Rosnąco</option>
                <option value="desc">Malejąco</option>
            </select>
            <Switch>
                <Route path="/task04/price-asc">
                    <Shop products={ products } sort={ 'asc' } />
                </Route>
                <Route path="/task04/price-desc">
                    <Shop products={ products } sort={ 'desc' } />
                </Route>
            </Switch>
        </>
    );
}

export default Task04;

