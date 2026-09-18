import React from 'react';
import { useParams } from 'react-router-dom';
import Shop from './Shop'

const ShopFilter = ({ products }) => {
    const { min = "", max = "", text = "" } = useParams();
    let filteredProducts = [];


    filteredProducts = products.filter(product => {
        const matchesMinPrice = min === '' || product.price >= min
        const matchesMaxPrice = max === "" || product.price <= max
        const matchesText = product.name.toLowerCase().includes(text.toLowerCase())
        return matchesText && matchesMinPrice && matchesMaxPrice;
    })

    return (
        <section>
            <Shop products={filteredProducts} withoutFilter={true} />
        </section>
    );
}

export default ShopFilter;