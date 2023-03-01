import React from "react";
import Shop from "./Shop";
import { useParams, Redirect } from "react-router-dom";

const ShopWithCategory = ({products}) => {
    const {category} = useParams()
    const filteredProducts = products.filter(p => p.category.toLowerCase() === category.toLowerCase())
    return filteredProducts.length > 0
    ? <Shop products={filteredProducts}></Shop>
    : <Redirect to="/task03/404.html"/>
}

export default ShopWithCategory