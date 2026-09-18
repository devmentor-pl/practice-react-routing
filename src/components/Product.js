import React from "react";
import { useParams } from "react-router-dom";
import products from '../products.json'

const Product = (props) => {
    const { id: routeId } = useParams();

    const product = props.id
        ? props
        : products.find(item => item.id === parseInt(routeId));

    if (!product) {
        return "Nie ma takiego produktu";
    }

    const { id, name, description, category, price } = product;
    return (
        <article data-id={id} >
            <h1>{name}</h1>
            <p>{id}</p>
            <p>{description}</p>
            <p>{category}</p>
            <p>{price}</p>
        </article>
    )
}

export default Product;