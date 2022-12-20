import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
    return (
        <article>
            <header>{props.name}</header>
            <p>{props.description}</p>
            <span>{props.category}</span>
            <span>{props.price}</span>
            <li><Link to={`/task02/product-${props.id}`}>Read more...</Link></li>
        </article>
    )
}

export default Product;