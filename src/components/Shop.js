import React from 'react';
import Product from './Product';

const Shop = ({ products }) => {
    return (
        <section className='grid-section' style={{ margin: '1rem 0' }}>
            {products.length === 0 ? (
                <h2 style={{ color: 'lightsalmon' }}>No products matching parameters.</h2>
            ) : (
                products.map(p => <Product key={p.id} {...p} />)
            )}
        </section>
    );
};

export default Shop;
