import React from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import products from "../products.json"

const Product = (props) => {
    const { id } = useParams()
    console.log(props,'props')
    
    const [product = null] = products.filter(p => p.id === parseInt(id))

    if(product === null && Object.keys(props).length === 0 ){
        return <Redirect to="/task02/404.html"/>
    }
    const renderProducts = () => {
        const {name, category, price, description} = product
        return (
            <div data-id={id}>
            <h2>{name}</h2>
            <p>{category}</p>
            <p>{description}</p>
            <p>{price}$</p>
        </div>
        )
    }
    return (
        Object.keys(props).length > 0
        ? <div data-id={props.id}>
            <h2><Link to={`/task02/product-${props.id}`}>{props.name}</Link></h2>
            <p>{props.category}</p>
            <p>{props.description}</p>
            <p>{props.price}$</p>
        </div>
        :renderProducts()
    )

    }
export default Product