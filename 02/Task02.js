import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Product from '../src/components/Product';
import NotFound from '../src/views/NotFound';

const Task02 = () => {

    return (
        <>
            <h1>Task02</h1>
            <Route path="/task02"/>
            <Route path="/task02/product-:id">
                <Product/>
            </Route>
            <Route path="/task02/404.html">
                <NotFound/>
            </Route>
            {/* <Route>
                <Redirect to="/404.html"/>
            </Route> */}
 
        </>
        
    );
}

export default Task02;

