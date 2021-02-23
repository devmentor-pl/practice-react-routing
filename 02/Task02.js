import React from 'react';
import { Route } from 'react-router-dom';
import products from '../src/products.json';
import Product from '../src/components/Product'

const Task02 = () => {
    const routs = products.map(product => {
        const pathname = `/task02/product-${product.id}`;
        return <Route key={product.id} path={pathname}><Product {...product}/></Route>
    })

    return (
        <>
            <h1>Task02</h1>
            {routs}
        </>
    );
}

export default Task02;

