import React from 'react';
import Product from './Product';

const Shop = ({products}) => {
    return (
        <section>
            {products.map(product => (
                <Product key={product.id} {...product} />
            ))}
        </section>
    );
}

export default Shop;
