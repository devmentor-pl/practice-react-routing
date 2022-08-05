import React from 'react';
import { useHistory, Route,Switch } from 'react-router-dom';
import Shop from '../src/components/Shop';
import products from '../src/products.json'

const Task04 = () => {

    const history = useHistory()

    const handleChange = e => {
       history.push(`/task04/price-${e.target.value}`)
    }

    const currentSort = history.location.pathname.replace("/task04/price-","")

    return (
        <>
        <h1>Task04</h1>
        <select defaultValue={currentSort} onChange={handleChange}>
            <option value='desc'>cena malejąco</option>
            <option value='asc'>cena rosnąco</option>
        </select>
        <Switch>
            <Route path="/task04/price-asc">
                <Shop products={[...products].sort((a,b)=>a.price-b.price) }/>
            </Route>
            <Route path="/task04/price-desc">
                <Shop products={[...products].sort((a,b)=>b.price-a.price)} />
            </Route>
        </Switch>
        </>
    );
}

export default Task04;
