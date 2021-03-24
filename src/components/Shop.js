import React from 'react';
import Product from './Product';

const Shop = ({ products }) => {
    if (!products) return null;
    return (
        <section>
            { products.map((p) => <Product key={p.id} {...p} />) }
        </section>
    );
};

export default Shop;
