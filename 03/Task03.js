import React from 'react';
import { Route,Link,useRouteMatch } from 'react-router-dom';
import Shop from '../src/components/Shop';
import products from './../src/products.json';

const Task03 = () => {

    const match = useRouteMatch();

    return (
        <>
            <h1>Task03</h1>
            <li><Link to={`${match.path}/`}>All Products</Link></li>
            <li><Link to={`${match.path}/JavaScript`}>JavaScript</Link></li>
            <li><Link to={`${match.path}/React`}>React</Link></li>
            <Route path={`${match.url}/:category?`}>
                <Shop products={products}></Shop>
            </Route>
        </>
    );
}

export default Task03;

