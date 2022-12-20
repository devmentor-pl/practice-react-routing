import React from "react";
import { useParams } from "react-router-dom";
import products from '../src/products.json';

const ProductId = () => {
    const { id } = useParams();

    const [product = null] = products.filter(prod => prod.id === parseInt(id));

    const { name, category, description, price } = product;

    return (
        <article>
            <h3>{name}</h3>
            <h4>Cena: {price} zł</h4>
            <p>{description}</p>
            <p>{category}</p>
        </article>
    )
}
export default ProductId;