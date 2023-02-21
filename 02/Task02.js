import React, { useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import products from "../src/products.json"
import Product from '../src/components/Product';

const Task02 = () => {
    const nav = <ul>
        {products.map(item => <li key={item.id}><Link to={`/task02/product-${item.id}`}>{item.name}</Link></li>)}
    </ul> 
    const routes = products.map(item => <Route path={`/task02/product-${item.id}`}>
        <Product description={item.description} 
                price={item.price} 
                name={item.name} 
                category={item.category}>    
        </Product>
    </Route>)
    return (
        <>
            <h1>Task02</h1>
            {nav}
            <Switch>
                {routes}
            </Switch>
        </>
        
    );
}

export default Task02;

