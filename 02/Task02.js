import React from 'react';
import { Route, Link } from 'react-router-dom'
import Product from '../src/components/Product';
import products from '../src/products.json'

const Task02 = () => {
    return (
        <>
            <h1>Task02</h1>
            {products.map((product) => {
                return (<>
                    <li><Link to={`/task02/product-${product.id}`}>Id: {product.id} - {product.name}</Link></li>
                    <Route key={product.id} path={`/task02/product-${product.id}`}>
                        <Product name={product.name} description={product.description} price={product.price} />
                    </Route>
                </>)


            })}
        </>

    );
}

export default Task02;

