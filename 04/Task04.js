import React from 'react';
import products from '../src/products.json'
import { Route, useHistory } from 'react-router-dom'
import Shop from '../src/components/Shop';

const Task04 = () => {

    const history = useHistory()

    const handleChange = e => {
        history.push(`/task04/${e.target.value}`)
    }
    console.log(products)

    return (
        <>
        <h1>Task04</h1>
            <select onChange={handleChange}>
                <option value=''>Wybierz opcję sortowania</option>
                <option value='price-asc'>cena kursów rosnąco</option>
                <option value='price-desc'>cena kursów malejąco</option>
            </select>
            <Route exact path='/task04/'>
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

