import React from 'react';
import { Link, Route, Switch } from 'react-router-dom'
import products from '../src/products.json'
import Product from './Product'
import Error from './Error';

const Task02 = () => {

    const links = products.map(product => {
        const productId = "/task02/product-" + product.id
        return (
            <li>
                <Link to={productId}>{product.name}</Link>
            </li>
        )
    })

    return (
        <div>
            <h1>Task02</h1>
            <ul>
                {
                    links
                }
            </ul>

            <hr />

            <Switch>
                <Route path='/task02/product-:id' exact component={Product} />
                <Route path='/task02/product/Error404' component={Error} />
            </Switch>
        </div>
    );
}

export default Task02;

