import React from "react";
import { Redirect, useParams } from "react-router-dom";
import Shop from "./Shop";

const Category = ({ products }) => {
    const { category } = useParams()

    const filteredProducts = products.filter(item => {
        return (item.category).toLowerCase() === category
    })

    if (filteredProducts.length === 0) {
        return <Redirect to='/404.html' />
    }

    return (
        <Shop products={filteredProducts} />
    )
}

export default Category