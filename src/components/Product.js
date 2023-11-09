import React from 'react';
import { useParams, Redirect } from 'react-router-dom';

import products from './../products.json';

function Product(props) {
    const { id } = useParams();
    const [product = null] = products.filter(prod => prod.id === parseInt(id));

    let item = product;

    if (item === null) {
        item = props;
    }

    if (item === null || Object.keys(item).length === 0) {
        return <Redirect to='/404.html' />;
    }

    const { name, description, id: itemId } = item;

    return (
        <div className='card' data-id={id || itemId}>
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    );
}

export default Product;

// wiem, burdel :) 