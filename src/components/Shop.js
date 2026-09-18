import React from 'react';
import { useParams } from 'react-router-dom';
import Product from './Product';

const Shop = ({ products, withoutFilter = false }) => {
    console.log(products)
    const { name } = useParams();
    const displayedProducts = name && withoutFilter === false ? products.filter(item => item.category.toLowerCase() === name.toLowerCase()) : products;

    return (
        <section>
            {displayedProducts.map(p => <Product key={p.id} {...p} />)}
        </section>
    );
}

export default Shop;
