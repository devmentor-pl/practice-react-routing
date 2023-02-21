import React from "react";

const Product = (props) => {
    const {price, description, name, category} = props
    return (
        <div>
            <h2>{name}</h2>
            <p>Category:{category}</p>
            <p>{description}</p>
            <p>Price: {price}$</p>
        </div>
    )
}

export default Product