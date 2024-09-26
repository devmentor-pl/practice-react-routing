import React from 'react';
import { Route, useHistory, Redirect } from 'react-router-dom';
import Shop from "./../src/components/Shop"
import products from './../src/products.json'

const Task04 = () => {
    const history = useHistory()

    function HandleChange(e){
        const sortValues = ['none', 'price-asc', 'price-desc']
        const value = e.target.value

        if(sortValues.included(value)){
            history.push(`task04/${value}`)
        }else{
            history.push('/404')
        }
    }

    return (
        <>
            <h1>Task04</h1>
            <select onChange={HandleChange}>
                <option value="none">Wybierz opcje</option>
                <option value="price-asc">od najtańszego</option>
                <option value="price-desc">od najdroższego</option>
            </select>
            <Route path="/task04/none">
                <Redirect to="/404"/>
            </Route>
            <Route path="/task04/price-asc">
                <Shop list={[...products].sort((a,b) => a.price - b.price)}/>
            </Route>
            <Route path="/task04/price-desc">
                <Shop list={[...products].sort((a,b) => b.price - a.price)}/>
            </Route>
        </>
    );
}

export default Task04;

