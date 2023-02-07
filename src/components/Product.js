import React from "react";


const Product = ({name,description,price}) => {


    return(
        <article>
            <h2>{name}</h2>
            <p>{price}</p>
            <p>{description}</p>
        </article>
    )

}

export default Product