import React, { useEffect } from 'react';

const Product = ({ name, description, price, link = null }) => {
    // useEffect(() => {
    //     console.log('Product component mounted');
    // }, []);

    const productTitle = link === null ? name : <a href={link}>{name}</a>;
    return (
        <article>
            <h3>{productTitle}</h3>
            <h4>{price}</h4>
            <p>{description}</p>
        </article>
    );
};

export default Product;