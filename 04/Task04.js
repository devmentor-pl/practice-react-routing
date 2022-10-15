import React from 'react';
import { Route, Redirect, useHistory } from 'react-router-dom';

import Shop from './../src/components/Shop';
import products from './../src/products.json';

const Task04 = () => {
    const history = useHistory()
    
    const handleChange = event => {
        const sortValues = ['none', 'price-asc', 'price-desc', 'name-a-z']
        const value = event.target.value

        if (sortValues.includes(value)) {
            history.push(`/task04/${value}`)
        } else {
            history.push(`/404`)
        }
    }

    return (
        <>
            <h1>Task04</h1>
            <select onChange={ handleChange }>
                <option value="none">Wybierz opcję</option>
                <option value="price-asc">Od najtańszego</option>
                <option value="price-desc">Od najdroższego</option>
                <option value="name-a-z">A-Z</option>
            </select>

            <Route path='/task04/none'>
                <Redirect to='/task04' />
            </Route>

            <Route path='/task04/price-asc'>
                <Shop list={[...products].sort((a, b) => a.price - b.price)} />
            </Route>

            <Route path='/task04/price-desc'>
                <Shop list={[...products].sort((a, b) => b.price - a.price)} />
            </Route>

            <Route path='/task04/name-a-z'>
                <Shop list={[...products].sort((a, b) => {
                    const nameA = a.name.toLowerCase()
                    const nameB = b.name.toLowerCase()
                    if (nameA < nameB) {
                        return -1
                    }
                    if (nameA > nameB) {
                        return 1
                    }
                    return 0
                })} />
            </Route>
        </>
    );
}

export default Task04;

