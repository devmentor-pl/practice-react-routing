import React from 'react';
import Shop from '../src/components/Shop';
import products from './../src/products.json';
import { Switch, Route, useLocation } from 'react-router-dom';
import ShopWithCategory from '../src/components/ShopWithCategory';

const Task03 = () => {

    return (<>
            <h1>Task03</h1>
            <Switch>
                <Route exact path={`/task03`}>
                    <Shop products={products}></Shop>
                </Route>
                <Route path={`/task03/:category`} >
                    <ShopWithCategory products={products}/>
                </Route>
                <Route path={`/task03/404.html`}>
                    <p>Brak produktów w wybranej kategorii</p>
                </Route>
            </Switch>
    </>)
}

export default Task03;

