import React from "react";
import { Link } from "react-router-dom";

const Product = ({ id, name, description, price, link = null }) => {
    const productTitle = link === null ? name : <a href={link}>{name}</a>;

    return (
        <article>
            <Link to={`/task02/product-${id}`}>
                <h3>{productTitle}</h3>
            </Link>
            <h4>{price}</h4>
            <p>{description}</p>
        </article>
    );
};

export default Product;
