import React from 'react';
import { Redirect, Route, useHistory } from 'react-router-dom'
import Shop from './../src/components/Shop'
import products from './../src/products.json'

const Task04 = () => {
    const history = useHistory()

    // useHistory
    // -----------------
    const selectChange = e => {
        const url = e.target.value
        console.log(url)
        const sortValues = ['none', 'price-asc', 'price-desc']
        if (sortValues.includes(url)) {
            history.push('/task04/' + url)
        } else {
            history.push('/404')
        }
    }

    return (
        <div>
            <h1>Task04</h1>
            <div>task04/price-asc - price od najdroższego</div>
            <div>task04/price-desc</div>
            <br />
            <select onChange={selectChange}>
                <option value='none'>--- Wybierz sortowanie ---</option>
                <option value='price-asc'>Od najdroższego</option>
                <option value='price-desc'>Od najtańszego</option>
                <option value='price-desc-xxx'>xxx yyy zzz</option>
            </select>
            <Route exact path='/task04/price-asc'>
                <Shop list={[...products].sort((a, b) => b.price - a.price)} />
            </Route>
            <Route exact path='/task04/price-desc'>
                <Shop list={[...products].sort((a, b) => a.price - b.price)} />
            </Route>
            <Route exact path='/task04/none'>
                <Redirect to='/task04' />
            </Route>
            
            {/* when in URL /task/04/aaaa it must by 404 - but fail */}
            {/* <Route path='/task04/:nn'>
                <Redirect to='404' />
            </Route> */}
        </div>
    );
}

export default Task04;

