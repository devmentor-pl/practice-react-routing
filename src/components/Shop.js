import React from 'react';
import Product from './Product';

const Shop = ({ products }) => {
    return (
        <section className='grid-section'>
            {products.map(p => (
                <Product key={p.id} {...p} />
            ))}
        </section>
    );
};

export default Shop;
