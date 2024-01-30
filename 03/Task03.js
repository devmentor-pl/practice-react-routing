import React from 'react';
import products from './../src/products.json';
import { Route, NavLink, useParams } from 'react-router-dom'
import Shop from '../src/components/Shop'

const Courses = () => {
    const { category } = useParams()
    const courses = products.filter(product => category === product.category)
    return <Shop products={courses} />
}

const Task03 = () => {
    return (
        <>
        <h1>Task03</h1>
            <h1>Task03</h1>
            <li>
                <NavLink to='/task03'>
                    All
                </NavLink>
            </li>
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
                <Courses />
            </Route>
        </>
    );
}

export default Task03;

