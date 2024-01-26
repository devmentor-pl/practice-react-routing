import React from "react";

const Product = ({ name, category, description, price }) => {

    return (
        <section>
            <h2>Name: {name}</h2>
            <h3>Category: {category}</h3>
            <p>Description: {description}</p>
            <h3>Price: {price}</h3>
        </section>
    )
}

export default Product