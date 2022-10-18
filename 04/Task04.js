import React from 'react';
import products from '../src/products.json'
import { Route, Redirect, useHistory } from 'react-router-dom'
import Shop from '../src/components/Shop';

const Task04 = () => {
    const history = useHistory()

    const handleChange = e => {
        history.push(`/task04/${e.target.value}`)
    }

    return (
        <>
            <h1>Task04</h1>
            <select onChange={handleChange}>
                <option value=''>Wybierz opcję sortowania</option>
                <option value='price-asc'>cena rosnąco</option>
                <option value='price-desc'>cena malejąco</option>
            </select>
            <Route exact path='/task04/'>
                <Redirect to='/task04/' />
            </Route>
            <Route path='/task04/price-asc'>
                <Shop products={[...products].sort((a, b) => a.price - b.price)} />
            </Route>
            <Route path='/task04/price-desc'>
                <Shop products={[...products].sort((a, b) => b.price - a.price)} />
            </Route>
        </>

    );
}

export default Task04;

