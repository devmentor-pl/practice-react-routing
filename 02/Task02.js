import React from 'react';
import {Route, useParams, Redirect} from 'react-router-dom'
import products from './../src/products.json'
import Product from './../src/components/Product'

const ProductPage = () => {
    const {id} = useParams()
    const [product = null] = products.filter(p => p.id === Number(id))

    if (product === null) {
        return <Redirect to="/404" />
    }
    
    return (
        <Product {...product} />
    )
}


const Task02 = () => {
    return (
        <>
            <h1>Task02</h1>
            <Route path="/task02/product-:id">
                <ProductPage/>
            </Route>
        </>
    );
}

export default Task02;

