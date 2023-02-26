import React from "react";
import { Redirect } from "react-router-dom";
import products from "../products.json"
import { useParams } from "react-router-dom";
import NotFound from "../views/NotFound";

const Product = () => {
    const {id} = useParams()
    console.log(id)
    const [product = null] = products.filter(item => item.id === parseInt(id))
    if(product === null){
       return <Redirect to="/task02/404.html"/>
    } 
    const {name, category, description, price } = product
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