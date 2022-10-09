import React from 'react';
import { Route, NavLink } from 'react-router-dom'
import Shop from '../src/components/Shop'

import products from './../src/products.json';

const Task03 = () => {
    return (
        <>
            <h1>Task03</h1>
            <li>
                <NavLink to='/task03/react'>
                    React
                </NavLink>
            </li>
            <li>
                <NavLink to='/task03/javascript'>
                    JavaScript
                </NavLink>
            </li>
            <Route exact path='/task03/'>
                <Shop products={products} />
            </Route>
            <Route path='/task03/react'>
                <Shop products={products.filter(item => {
                    return item.category === 'React'
                })} />
            </Route>
            <Route path='/task03/javascript'>
                <Shop products={products.filter(item => {
                    return item.category === 'JavaScript'
                })} />
            </Route>


        </>

    );
}

export default Task03;

