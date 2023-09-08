import React from 'react';

import { Switch, useHistory, Route } from 'react-router-dom/cjs/react-router-dom.min';

import products from './../src/products.json';

import Shop from '../src/components/Shop';

const Task04 = () => {
    const history = useHistory()

    const handleOnChange = (e) => {
        history.push(e.target.value)
    }

    const sortedPriceDesc = 
    products.slice().sort((a, b) => a.price - b.price)

    const sortedPriceAsc = 
    products.slice().sort((a, b) => b.price - a.price)
    
    const sortedNameDesc = 
    products.slice().sort((a, b) => a.name.localeCompare(b.name))

    const sortedNameAsc = 
    products.slice().sort((a, b) => b.name.localeCompare(a.name))

    return (
        <>
            <h1>Task04</h1>
            <select
            onChange={handleOnChange}
            >
                <option value="/task04">Wybierz filtr</option>
                <option value="/task04/price-desc">Cena malejąco</option>
                <option value="/task04/price-asc">Cena rosnąco</option>
                <option value="/task04/name-desc">Nazwa a-z</option>
                <option value="/task04/name-asc">Nazwa z-a</option>
            </select>
            <Switch>
                <Route exact path={'/task04'}>
                    <Shop products={products} />
                </Route>
                <Route path={'/task04/price-desc'}>
                    <Shop products={sortedPriceDesc} />
                </Route>
                <Route path={'/task04/price-asc'}>
                    <Shop products={sortedPriceAsc} />
                </Route>
                <Route path={'/task04/name-desc'}>
                    <Shop products={sortedNameDesc} />
                </Route>
                <Route path={'/task04/name-asc'}>
                    <Shop products={sortedNameAsc} />
                </Route>
            </Switch>
        </>
    );
}

export default Task04;

