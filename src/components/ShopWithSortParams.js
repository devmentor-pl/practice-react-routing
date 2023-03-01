import React from "react";
import { useParams } from 'react-router-dom';
import Shop from "./Shop";
const ShopWithSortParams = ({products}) => {

const {min, max, term} = useParams()

let productsList = products

productsList = productsList.filter(p => {
    if(min !== undefined){
        return p.price >= min 
    }
    return p
})
productsList = productsList.filter(p => {
    if(max !== undefined){
        return p.price <= max 
    }
    return p
})
productsList = productsList.filter(p => {
    if(term !== undefined){
        return p.name.toLowerCase().includes(term.toLowerCase()) 
    }
    return p
})

return (
    <Shop products={productsList}></Shop>
)}

export default ShopWithSortParams 