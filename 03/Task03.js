import React from 'react';
import { Route, NavLink, useParams } from 'react-router-dom'
import Shop from '../src/components/Shop'

import products from './../src/products.json';

const Categories = () => {
    const { category } = useParams()
    const items = products.filter(product => category.toLowerCase() === product.category.toLowerCase())
    return <Shop products={items} />
}

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
            <Route path='/task03/:category'>
                <Categories />
            </Route>
        </>

    );
}

export default Task03;

