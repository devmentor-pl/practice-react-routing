import React from "react";
import products from '../products.json'
import { useParams } from "react-router-dom/cjs/react-router-dom";

const Product = () => {
    const { id } = useParams()

    const [currentProduct = null] = products.filter(item => item.id === Number(id))

    if (currentProduct === null) {
        console.log('This product does not exist')
        return
    }

    const { name, category, description, price } = currentProduct

    return (
        <section>
            <h2>Name: {name}</h2>
            <h3>Category: {category}</h3>
            <p>Description: {description}</p>
            <h3>Price: {price}</h3>
        </section>
    )
}

export default Product