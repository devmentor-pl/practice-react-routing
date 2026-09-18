import React from 'react';
import { useParams } from 'react-router-dom';
import Shop from './Shop'

const ShopSort = ({ products }) => {
    const { name } = useParams();
    let sortedProducts = [];

    if (name === 'high') {
        sortedProducts = products.sort((a, b) => b.price - a.price)
    } if (name === 'low') {
        sortedProducts = products.sort((a, b) => a.price - b.price)
    }

    return (
        <section>
            <Shop products={sortedProducts} withoutFilter={true} />
        </section>
    );
}

export default ShopSort;