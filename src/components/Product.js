import React from 'react';
import { useParams, Redirect } from 'react-router-dom';

import products from './../products.json';

function Product() {
    const { id } = useParams();
    const [product = null] = products.filter(prod => prod.id === parseInt(id));

    if (product === null) {
        return <Redirect to='/404.html' />;
    }

    const { name, description } = product;

    return (
        <div data-id={id}>
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    );
}

export default Product;
