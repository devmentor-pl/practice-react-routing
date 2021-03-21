import React from 'react';
import Product from './Product';

const Shop = ({products}) => {
    return (
        <section>
            { products.map(p => <Product {...p} />)}
        </section>
    );
}

export default Shop;