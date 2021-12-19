import React from 'react';
import { useParams, Link } from 'react-router-dom';

const Product = ({name, description, category, price, link = null}) => {
    const { category: cat = '' } = useParams();
    const productTitle = link === null ? name : <Link to={ link }>{name}</Link>;

    if(cat.toLowerCase() === category.toLowerCase() || cat === '') {
        return (
            <article>
                <h3>{productTitle}</h3>
                <h4>{price}</h4>
                <p>{description}</p>
            </article>
        )
    }
    return null;
}

export default Product;