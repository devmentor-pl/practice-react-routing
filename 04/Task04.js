import React from 'react';
import { Route, useHistory, Redirect } from 'react-router-dom'

import Shop from './../src/components/Shop'
import products from './../src/products.json'
// import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

const Task04 = () => {

const history = useHistory()

function handleChange(e) {
    const sortValues = ['none' ,'price-asc', 'price-desc']
    const value = e.target.value

    if(sortValues.includes(value)){
        history.push(`/Task04/${value}`)
    } else {
        history.push(`/404`)
        
    }
}

    return (
        <>
            <h1>Task04</h1>

            <select onChange={handleChange}>
                <option value="none">Wybierz opcję</option>
                <option value="price-asc">Od najtańszego</option>
                <option value="price-desc">Od najdroższego</option>
            </select>


            <Route path="/Task04/none">
                <Redirect to="/Task04/" />
            </Route>

            <Route path="/Task04/price-asc">
                <Shop list={[...products].sort((a,b) => a.price - b.price)} />
            </Route>

            <Route path="/Task04/price-desc">
                <Shop list={[...products].sort((a,b) => b.price - a.price)} />
            </Route>
        </>
    );
}

export default Task04;

