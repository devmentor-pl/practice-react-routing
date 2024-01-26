import React from "react";
import Shop from './Shop'
import products from '../products.json'
import { useHistory, useParams } from "react-router-dom";

const SearchedProducts = () => {
    const { minPrice, maxPrice, searchTerm } = useParams()
    const history = useHistory()

    const filteredProducts = products.filter(p => p.price >= Number(minPrice) &&
        p.price <= Number(maxPrice) &&
        (p.name).toLowerCase().includes(searchTerm.toLowerCase()))

    // if (filteredProducts.length === 0) {
    //     history.push('/404.html') // mam tutaj błąd - Cannot update during an existing state transition (such as within `render`).
    //     return
    // }

    return <Shop products={filteredProducts} />
}

export default SearchedProducts