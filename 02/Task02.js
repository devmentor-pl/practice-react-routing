import React from 'react';
import { Redirect, Route, useParams } from 'react-router-dom'
import products from './../src/products.json'
// import Product from './../src/components/Product'

const Product = (props) => {
    const product = props
    return (
        <>
            <h2>Title: {product.name}</h2>
            <h3>Description: {product.description}</h3>
            <h4>Category: {product.category}</h4>
            <div>Price: {product.price}</div>
        </>
    )
}

const ProductPage = () => {
    const { id } = useParams()

    const [product = null] = products.filter(product => product.id === Number(id))
    console.log(product)

    // if(product === null) {
    //     return <h2>Brak produktu</h2>
    // }
    if(product === null) {
        return <Redirect to='/404' />
    }

    return (
        <div>
            <Product {...product} />
        </div>
    )

}

const Task02 = () => {
    console.log(products)

    // enter URL to run Task02
    // ----------------------- 
    // /task02/product-1

    return (
        <div>
            <h1>Task02</h1>
            <div>URL /task02/product-1</div>
            <Route path='/task02/product-:id'>
                <ProductPage />
            </Route>
        </div>
    );
}

export default Task02;

