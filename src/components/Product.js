import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({id, name, description, price, category}) => {
    return (
        <article>
            <h1>
                <Link to={`/task02/product-${id}`}>
                    {name}
                </Link>
            </h1>
            <h2>{price}zł</h2>
            <h3>{category}</h3>
            <p>{description}</p>
        </article>
    );
}

export default Product;
