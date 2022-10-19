import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Product = ({id, name, description, price, category, link = null}) => {

    // const productTitle = link === null ? name : <a href={ link }>{name}</a>;
    
    return (
        <article>
            {/* <h3>{productTitle}</h3> */}
            <hr />
            <Link to={'/task02/product-'+id}>{name}</Link>
            <h4>{name}</h4>
            <div>{description}</div>
            <div>{price}</div>
            <div>{category}</div>
        </article>
    );
}

export default Product;