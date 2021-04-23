import React from 'react';
import { Route, useParams } from 'react-router';
import products from '../src/products'

const Task02 = () => {
    const ProductDescription = () => {
        const { id } = useParams()
        const productList = products.filter(product => {
            return product.id.toString() === id
        })

        if(productList.length) {
            const {name, description, category, price} = productList[0]
            return (
                <section>
                    <p>name: {name}</p>
                    <p>descripion: {description}</p>
                    <p>category: {category}</p>
                    <p>price: {price}</p>
                </section>
            )
        }

        return (
            <section>
                <p>Product not found!</p>
            </section>
        )
    }

    return (
        <>
            <h1>Task02</h1>
            <Route path='/task02/product-:id' >
                <ProductDescription/>
            </Route>
        </>
    );
}

export default Task02;

