import React, {useEffect, useState} from 'react';
import { Redirect, Route, Switch, Link, useHistory } from 'react-router-dom';
import products from "../src/products.json"
import Shop from '../src/components/Shop';

const Task04 = () => {
    const history = useHistory()
    const handleChange = event => {
        history.push(`/task04${event.target.value}`)
    }
  
    const sortProducts = (order) => {
        if(order === "/task04/price-asc"){
            return products.map(i=>i).sort((a,b) => a.price - b.price)
            
        }else if(order === "/task04/price-desc"){
            return products.map(i=>i).sort((a,b) => b.price - a.price)
        }
    }
    return (
        <>
            <h1>Task04</h1>
            <select onChange={handleChange}>
                <option value="">Sortuj</option>
                <option value="/price-asc">cena rosnącą</option>
                <option value="/price-desc">cena malejąco</option>
            </select>
            <Route exact path={`/task04`}>
                <Shop products={products}></Shop>
             </Route>
            <Route path={`/task04/:order`}>
                <Shop products={sortProducts(history.location.pathname)}></Shop>
            </Route>
        </>
    );
}

export default Task04;

