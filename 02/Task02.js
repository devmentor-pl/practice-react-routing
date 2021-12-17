import React from 'react';
import {Switch, Route ,useParams, Redirect, Link} from "react-router-dom";

import products from '../src/products.json'

const Task02 = () => {
    const Product = () => {
        const {id} = useParams();
        const [product = null] = products.filter((item) => item.id === parseInt(id));

        if(product === null) {
            return <Redirect to='/404.html'/>
        }

        const {name, description, price, category} = product

        return (
            <article data-id={id}>
                <h2>{name}</h2>
                <p>{description}</p>
                <p>{price}</p>
                <p>{category}</p>
            </article>
        );
    };

    const nav = products.map(item => (
        <li key={item.id}>
            <Link to={`/task02/product-${item.id}`}>{item.name}</Link>
        </li>
    ))

    return (
        <>
            <h1>Task02</h1>
            {nav}
            <Switch>
                <Route path='/task02/product-:id'>
                    <Product/>
                </Route>
            </Switch>
        </>
    );
}

export default Task02;

