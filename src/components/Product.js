import React from 'react';

const Product = ({name, description, price, link = null}) => {
    console.log('🚀 ~ Product ~ name', name)

    const productTitle = link === null ? name : <a href={ link }>{name}</a>;
    
    return (
        <article>
            <h3>{productTitle}</h3>
            <h4>{price}</h4>
            <p>{description}</p>
        </article>
    );
}

export default Product;