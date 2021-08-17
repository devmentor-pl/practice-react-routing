import React from 'react';

const Product = ({name, descrption, price, link = null}) => {

    const productTitle = link === null ? name : <a href={ link }>{name}</a>;
    
    return (
        <article>
            <h3>{productTitle}</h3>
            <h4>{price}</h4>
            <p>{descrption}</p>
        </article>
    );
}

export default Product;