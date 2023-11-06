import React from 'react';
import Shop from '../src/components/Shop';
import Category from '../src/components/Category';

import products from './../src/products.json';
import NotFound from '../src/components/NotFound';
import { Switch, Route, Redirect } from 'react-router-dom';

const Task03 = () => {
    return (
        <>
            <h1>Task03</h1>
            <Switch>
                <Route exact path='/task03'>
                    <Shop products={products} />
                </Route>
                <Route path='/task03/:category'>
                    <Category products={products} />
                </Route>
                <Route path='/404.html'>
                    <NotFound/> 
                    {/* <NotFound/> nie wiem czemu, nie pokazuje tego komponentu  */}
                </Route>
                <Route>
                    <Redirect to='/404.html'/>
                </Route>
            </Switch>
        </>
    );
}

export default Task03;

