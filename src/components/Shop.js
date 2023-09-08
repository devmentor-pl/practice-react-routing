import React from 'react';
import Product from './Product';

const Shop = ({products}) => {
    return (
        <section>
            { products.map(p => <Product {...p} key={p.id}/>)}
        </section>
    );
}

export default Shop;
